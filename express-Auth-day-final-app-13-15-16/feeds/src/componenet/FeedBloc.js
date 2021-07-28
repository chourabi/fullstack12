import React from 'react';

class FeedBloc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addDate: props.content.addDate,
            content: props.content.content,
            new_content: props.content.new_content != null ? props.content.new_content : null,
            update_date: props.content.update_date != null ? props.content.update_date : null,
            user: props.content.user,
            _id: props.content._id,
            showingOriginalContent: props.content.new_content != null ? false : true,
            likes: 0,
            connectedUserId: null,
            updating: false,
            update_text: '',
            deleted: false
        }
    }

    componentDidMount() {
        console.log(this.state);
        this.getFeedsLikes();
        this.getUserInformation();
    }


    formatDate(dateString) {
        let date = new Date(dateString);

        return date.getFullYear() + '/' + (date.getMonth() + 1) + "/" + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
    }


    getFeedsLikes() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/feed/likes?id=" + this.state._id, requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ likes: result.likes })
            })
            .catch(error => console.log('error', error));
    }

    addLike() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/feed/likes/add?id=" + this.state._id, requestOptions)
            .then(response => response.json())
            .then(result => {
                this.getFeedsLikes();
            })
            .catch(error => console.log('error', error));
    }



    getUserInformation() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/user/data", requestOptions)
            .then(response => response.json())
            .then(result => {
                const id = result.user._id;


                this.setState({
                    connectedUserId: id
                })

            })
            .catch(error => console.log('error', error));
    }


    updateFeed() {
        const newValue = this.state.update_text;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var raw = JSON.stringify({ "content": newValue, "id": this.state._id });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/feed/update", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success === true) {
                    this.setState({
                        new_content: newValue,
                        updating: false
                    })
                }
            })
            .catch(error => console.log('error', error));
    }

    deleteFeed() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/feed/delete?id=" + this.state._id, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    deleted:true
                })
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div>
                {
                    this.state.deleted === false ?
                        <div className="card mt-2">
                            <div className="card-body">
                                <h6> {this.state.user.fullname} </h6>
                                <p style={{ margin: 0 }} className="text-muted">{this.state.user.email}</p>
                                <p className="text-muted"> <small>{this.formatDate(this.state.addDate)}</small> </p>


                                {
                                    this.state.updating === true ?

                                        <section>
                                            <textarea onChange={(e) => {
                                                this.setState({
                                                    update_text: e.target.value
                                                })
                                            }} className="form-control">{
                                                    this.state.showingOriginalContent === false ? this.state.new_content : this.state.content
                                                }</textarea>
                                            <button className="mt-3 btn-success btn btn-sm" onClick={() => {
                                                this.updateFeed();
                                            }}>save</button>
                                            <button style={{ marginLeft: 10 }} className="mt-3 btn-secondary btn btn-sm" onClick={() => { this.setState({ updating: false }) }}>cancel</button>

                                        </section>

                                        :

                                        <section>
                                            <p>

                                                {
                                                    this.state.showingOriginalContent === false ? this.state.new_content : this.state.content
                                                }

                                                {
                                                    this.state.showingOriginalContent === false ? <span style={{ marginLeft: 10 }} className="text-primary"
                                                        onClick={() => {
                                                            this.setState({
                                                                showingOriginalContent: true
                                                            })
                                                        }

                                                        }>view original</span> : <div>

                                                        {
                                                            this.state.new_content != null ?
                                                                <span style={{ marginLeft: 10 }} className="text-primary"

                                                                    onClick={() => {
                                                                        this.setState({
                                                                            showingOriginalContent: false
                                                                        })
                                                                    }}

                                                                >show latest</span> :
                                                                <span></span>
                                                        }

                                                    </div>
                                                }

                                            </p>

                                            <button onClick={() => {
                                                this.addLike();
                                            }} className="btn btn-outline-primary btn-sm">{this.state.likes} like</button>

                                            {
                                                this.state.connectedUserId === this.state.user._id ?
                                                    <button style={{ marginLeft: 10 }} className="btn btn-outline-warning btn-sm" onClick={() => { this.setState({ updating: true }) }}>  update</button> :
                                                    <div></div>
                                            }

                                            {
                                                this.state.connectedUserId === this.state.user._id ?
                                                    <button style={{ marginLeft: 10 }} className="btn btn-outline-danger btn-sm" onClick={() => {
                                                        this.deleteFeed();
                                                    }}>  delete</button> :
                                                    <div></div>
                                            }

                                        </section>


                                }






                            </div>
                        </div> :
                        <div className="alert alert-success">this feed is deleted.</div>
                }
            </div>
        );
    }
}

export default FeedBloc;