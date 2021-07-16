import React from "react";
class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }


    connect(){
        if ( this.state.username === 'admin' && this.state.password === 'admin' ) {
           //this.props.history.push('/home')
            localStorage.setItem('access',new Date().getTime());
           window.location = "/home";
        }else{
            alert("wrong username or password")
        }
    }


    render() {
        return(
            <div>
            <label>Username</label>
            <input onChange={ (e)=>{ this.setState({username:e.target.value}) } } type="text" />
            <label>password</label>
            <input onChange={ (e)=>{ this.setState({password:e.target.value}) } } type="password" />

            <button onClick={ ()=>{
                this.connect();
            } }>Connect</button>

        </div>
        );
    }
}


export default AuthPage ;