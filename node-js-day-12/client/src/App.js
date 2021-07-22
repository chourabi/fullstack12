import React from 'react';
import logo from './logo.svg'; 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      a:'',
      b:'',
      somme:null
    }

  }



  render(){
    return(
      <div>
        <label>Valeur a:</label>
        <input type="text" value={this.state.a} onChange={ (e)=>{this.setState({a:e.target.value})} } />
        
        +

        <label>Valeur b:</label>
        <input type="text" value={this.state.b} onChange={ (e)=>{this.setState({b:e.target.value})} } />

        <button onClick={()=>{
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8080/multi?a="+this.state.a+"&b="+this.state.b, requestOptions)
            .then(response => response.json())
            .then(result =>{
              if (result.success === true) {
                const somme =result.somme;
                this.setState({
                  somme:somme
                })
              }
            })
            .catch(error => console.log('error', error));


        }} >Calculer</button>


        {
          this.state.somme === null ? <div></div> : <div>
            <h1>Somme : { this.state.somme }</h1>
          </div>
        }
        
      </div>
    );
  }
}
export default App;
