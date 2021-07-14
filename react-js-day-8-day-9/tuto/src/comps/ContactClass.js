import React from 'react';


class ContactClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname:props.fullname,
            phone:props.phone
        }
       
    }

    hidePhoneNumber(){
        
        // false wrong , don't do this
        //this.state.phone = "********";

        // do this 
        this.setState({
            phone:"********"
        })
    }

    render() {
        
        return (
            <li>
                <p>
                    <strong>
                        {this.state.fullname}
                    </strong>
                    <br />
                    <small>{this.state.phone}</small> <br/>

                    <button onClick={ ()=>{
                        this.hidePhoneNumber();


                    }  } > hide phone number </button>
                </p>
            </li>
        );
    }


}



export default ContactClass;