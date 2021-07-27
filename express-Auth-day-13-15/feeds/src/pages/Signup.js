 
import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={
        fullname:'',
        password:'',
        email:'',
        
        errorMsg:''
    }
  }


  createAccount(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"fullname":this.state.fullname,"email":this.state.email,"password":this.state.password});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:8000/api/signup", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if (result.success === true) {
            
        } else {
            this.setState({
                errorMsg:result.message
            })
        }
    })
    .catch(error => console.log('error', error));
  }

 


  render(){
    return(
      <div className="container mt-5">
          <div className="card">
            <div className="card-body">
                <h1>Create account</h1>
              <hr/>

              <div className="form-group">
                <label>Fullname</label>
                <input className="form-control" type="text" value={this.state.fullname} onChange={ (e)=>{this.setState({fullname:e.target.value})} } placeholder={'username please' }/> <br/>
                
              </div>

              <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="text" value={this.state.email} onChange={ (e)=>{this.setState({email:e.target.value})} } placeholder={'username please' }/> <br/>
                
              </div>
             

              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" value={this.state.password} onChange={ (e)=>{this.setState({password:e.target.value})} } placeholder={'password please' }/> <br/>
            
              </div>

               
              <button  className="mt-3 btn btn-primary" onClick={ ()=>{
                  this.createAccount();
              } }  >Create account</button>

              {
                  this.state.errorMsg !== '' ?
                  <div className="alert alert-danger">{this.state.errorMsg}</div>:
                  <div></div>
              }
            </div>
          </div>
      </div>
    );
  }
}

export default Signup;
