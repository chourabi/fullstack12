import React from "react";
class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { phone: "11552233", fullname: "chourabi taher" },
                { phone: "99886633", fullname: "test user" },
                { phone: "55778822", fullname: "contact exmpl" }

            ],

            query: '',

            isAddingNewContact: false,

            fullname:'',
            phonenumber:''
        }
    }


    toggleAddState(){
        this.setState({
            isAddingNewContact: ! this.state.isAddingNewContact
        })
    }


    onSubmit(){
        const contact = { phone: this.state.phonenumber, fullname: this.state.fullname };
                                    let newContactList  = this.state.contacts;

                                    newContactList.push(contact);

                                    this.setState({
                                        contacts:newContactList,
                                        phonenumber:'',
                                        fullname:'',
                                        isAddingNewContact: ! this.state.isAddingNewContact
                                    })

    }


 

    render() {
        return (
            <div className="container">
                <h3>My Contact List:</h3>
                <hr />

                {

                    this.state.isAddingNewContact === true ?
                        <section>
                            <form onSubmit={ (e)=>{
                                e.preventDefault();

                                this.onSubmit();
                            } }>
                            <div className="form-group mb-3">
                                <label>Contact name</label>
                                <input onChange={(e) => {
                                    const value = e.target.value;

                                    this.setState({
                                        fullname: value
                                    })

                                }} type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Phone number</label>
                                <input onChange={(e) => {
                                    const value = e.target.value;

                                    this.setState({
                                        phonenumber: value
                                    })


                                }} type="tel" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <button type="submit" className="btn btn-primary "  style={{ marginRight: 25 }}>Save</button>
                                <button className="btn btn-secondary" onClick={()=>{
                                this.toggleAddState();
                            }}>Cancel</button>

                            </div>
                            </form>



                        </section>

                        :

                        <section className="show-contact-list">

                            <button className="btn btn-primary" onClick={()=>{
                                this.toggleAddState();
                            }}>Add contact</button>


                            <div className="form-group mb-3">
                                <label>Search for</label>
                                <input value={this.state.query} onChange={(e) => {
                                    const value = e.target.value;

                                    this.setState({
                                        query: value
                                    })


                                }} type="search" className="form-control" />
                            </div>

                            <div className="row">
                                <ul className="list-group">
                                    {

                                        this.state.contacts.filter((c) => (c.fullname.indexOf(this.state.query) != -1)).map((c) => {
                                            return (
                                                <li key={c.phone} className="list-group-item">{c.fullname} <br /> {c.phone} </li>
                                            );
                                        })
 
                                    }

                                </ul>
                            </div>
                        </section>

                }





            </div>
        );
    }
}

export default ContactList;