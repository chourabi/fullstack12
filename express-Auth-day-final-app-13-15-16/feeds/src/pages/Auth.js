 
import React from 'react';
import { Link } from 'react-router-dom';

class Auth extends React.Component{
  constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        errorMsg:''
    }
  }


  connect(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"email":this.state.username,"password":this.state.password});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/api/signin", requestOptions)
      .then(response => response.json())
      .then(result =>{
          console.log(result);
          if (result.success === false) {
              this.setState({
                  errorMsg:result.message
              })
          } else {
              // save token
              // go to home page
              localStorage.setItem('token',result.token);
              this.props.history.push('/');
          }
      })
      .catch(error => console.log('error', error));
  }


  render(){
    return(
      <div className="container mt-5">
          <div className="card">
            <div className="card-body">
                <h1>Auth page</h1>
              <hr/>

              <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="text" value={this.state.username} onChange={ (e)=>{this.setState({username:e.target.value})} } placeholder={'username please' }/> <br/>
                
              </div>

              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" value={this.state.password} onChange={ (e)=>{this.setState({password:e.target.value})} } placeholder={'password please' }/> <br/>
            
              </div>

              <p>or if you don't have an account <Link to="/create-account">create on now !</Link> </p>

              
              <button  className="mt-3 btn btn-primary" onClick={ ()=>{this.connect()} } >connect now</button>

              {
                  this.state.errorMsg !== '' ?
                  <div className="alert alert-danger mt-3">{this.state.errorMsg}</div>:
                  <div></div>
              }
            </div>
          </div>
      </div>
    );
  }
}

export default Auth;
