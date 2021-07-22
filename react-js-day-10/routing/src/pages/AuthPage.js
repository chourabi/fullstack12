import React from "react";
import { withRouter } from "react-router-dom";
class AuthPage extends React.Component {


    constructor(props) {
        super(props);
        this.state={
            username:'admin',
            password:'admin'
        }

        this.connect = this.connect.bind(this);
    }


    connect(){
        
    }


    render() {
        return(
            <div>
            <label>Username</label>
            <input value={this.state.username} onChange={ (e)=>{ this.setState({username:e.target.value}) } } type="text" />
            <label>password</label>
            <input value={this.state.password} onChange={ (e)=>{ this.setState({password:e.target.value}) } } type="password" />

            <button onClick={ ()=>{
                if ( this.state.username === 'admin' && this.state.password === 'admin' ) {
                    localStorage.setItem('access',new Date().getTime());

                    
                    this.props.history.push('/home')
                 
               }else{
                   alert("wrong username or password")
               }
            } }>Connect</button>

        </div>
        );
    }
}


export default withRouter (AuthPage) ;