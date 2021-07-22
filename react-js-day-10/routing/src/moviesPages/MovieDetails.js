import React from 'react';
import NavBar from '../pages/Comps/navbar';


class MovieDetails extends React.Component{
    constructor(props){
        super(props);
 
        this.state = {
            id:props.match.params.id,
            isLoading:true,
            movie:null
        }
    }


    componentDidMount(){
        this.getMoviesDetails();
    }

    getMoviesDetails(){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=s771r3pdvns2cftdm5mv67f6kt");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+this.state.id, requestOptions)
        .then(response => response.json())
        .then(result =>{
            this.setState({
                movie:result.data.movie,
                isLoading: false
            })
        })
        .catch(error => console.log('error', error));
    }


    render(){
        return(
            <div>
                <NavBar />
                {
                    this.state.isLoading === true ?
                    <div className="container mt-5 text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :

                    <div className="container mt-5">
                        <div className="row">
                        <div className="col-sm-7">
                            <img src={this.state.movie.large_cover_image} width={'100%'}/>
                        </div>
                        <div className="col-sm-5">
                            <h1>{this.state.movie.title}</h1>
                            <p>
                                {this.state.movie.description_full}
                            </p>

                            <div className="row">
                                
                                {
                                    this.state.movie.torrents.map((t)=>{
                                        return (
                                            <div className="col-sm-6">
                                                <a href={t.url} className="btn btn-primary w-100" download >{t.quality}</a>
                                            </div>
                                        );
                                    })
                                }
                            </div>

                        </div>
                        
                        
                        </div>

                    </div>
                }

            </div>
        );
    }
}

export default MovieDetails;