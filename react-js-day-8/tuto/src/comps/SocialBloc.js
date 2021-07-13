import React from 'react';
class SocialBloc extends React.Component {
 
    constructor(props){
      super(props);
      this.state = { 
          likes:props.likes 
      }
    }
  
    render(){
        

      return (
        <div>
           <button className="btn btn-outline-primary " onClick={
                ()=>{ 
                    this.setState({likes:( this.state.likes +1 )}) 
                } 
            
            
            }
                
                > {this.state.likes} likes </button>
           <button  className="btn btn-outline-primary"> share </button>
           
        </div>
      );
    }
  
  }
  
  export default SocialBloc;
  