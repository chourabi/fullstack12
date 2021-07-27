 
import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
        feeds:[]
    }
  }

  componentDidMount(){
      const token = localStorage.getItem('token');

      if (token == null) {
          this.props.history.push('/auth');
      }else{
           this.getAllFeeds();
      }
  }

  getAllFeeds(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem('token'));

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/api/feed/list", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({feeds:result}))
      .catch(error => console.log('error', error));
  }


 

  render(){
    return(
      <div className="container mt-5">
          
          <ul>
            {
              this.state.feeds.map((f)=>{
                return( 
                <li>
                  { f.content }
                </li> );
              })
            }
          </ul>
          
           
      </div>
    );
  }
}

export default Home;
