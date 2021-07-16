import React from "react";
import { useHistory } from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);


        this.checkAuthState = this.checkAuthState.bind(this);
        
    }


    componentDidMount(){
        this.checkAuthState();
    }


    checkAuthState(){
        const token = localStorage.getItem('access');
        if (token == null) {
            // go to auth page
            
            window.location="/auth"
            
            
        }
    }

    /*componentWillUnmount(){

    }

    componentDidUpdate(){
        
    }*/


    render() {
        
        return (
            <div>
                <h1>Home page</h1>

                <button onClick={
                    ()=>{
                        this.props.history.push('/some/path');
                    }
                }>ok</button>
            </div>
        );
    }

}

export default HomePage;