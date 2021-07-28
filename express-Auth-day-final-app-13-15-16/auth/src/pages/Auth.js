 
import React from 'react';

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
    
    var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/api/auth", requestOptions)
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
      <div>
          <h1>Auth page</h1>
          <hr/>

          <input type="text" value={this.state.username} onChange={ (e)=>{this.setState({username:e.target.value})} } placeholder={'username please' }/> <br/>
          <input type="password" value={this.state.password} onChange={ (e)=>{this.setState({password:e.target.value})} } placeholder={'password please' }/> <br/>
          
          <button onClick={ ()=>{this.connect()} } >connect now</button>

          {
              this.state.errorMsg !== '' ?
              <h3>{this.state.errorMsg}</h3>:
              <div></div>
          }
      </div>
    );
  }
}

export default Auth;
