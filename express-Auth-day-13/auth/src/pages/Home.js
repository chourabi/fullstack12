 
import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
        movies:[]
    }
  }

  componentDidMount(){
      const token = localStorage.getItem('token');

      if (token == null) {
          this.props.history.push('/auth');
      }else{
          this.getMovies();
      }
  }


  getMovies(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem('token'));
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/movies", requestOptions)
      .then(response => response.json())
      .then(result => {
          this.setState({
              movies:result
          })
      })
      .catch(error => console.log('error', error));
  }

  render(){
    return(
      <div>
          <h1>Home page</h1>
          <ul>
              {
                  this.state.movies.map((m)=>{
                      return(<li>{m.title}</li>);
                  })
              }
          </ul>
      </div>
    );
  }
}

export default Home;
