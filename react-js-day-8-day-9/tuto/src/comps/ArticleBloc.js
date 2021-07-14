import React from 'react';
import SocialBloc from './SocialBloc';
class ArticleBloc extends React.Component {
 
    constructor(props){
      super(props);
      this.state = { 
         title:props.title,
         content:props.content,
         likes:props.likes
      }
    }
  
    render(){
        console.log(this.state);
      return (
        <div className="card mt-3">
            
          <div className="card-body">
          <h3> {this.state.title} </h3>
          <p>{this.state.content}</p>

          <SocialBloc likes = {this.state.likes} />

          </div>
        </div>
      );
    }
  
  }
  
  export default ArticleBloc;
  