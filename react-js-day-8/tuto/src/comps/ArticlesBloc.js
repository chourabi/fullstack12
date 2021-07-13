import React from 'react';
import ArticleBloc from './ArticleBloc';
class ArticlesBloc extends React.Component {
 
    constructor(props){
      super(props);
      this.state = {
         articles:[
            {
                title:"first artilce",
                content:"react js is awesome !!!",
                likes:50
            },
            {
                title:"bye bye HTML JS CSS",
                content:"React js is taking the world !!!",
                likes:60
            },
            
         ]
      }
    }
  
    render(){
      return (
        <div className="container">
            
          <h1> my Articles: </h1>

          {
              this.state.articles.map((a)=>{
                  return <ArticleBloc title={a.title} content={a.content} likes={a.likes}  />
              })
          }

        </div>
      );
    }
  
  }
  
  export default ArticlesBloc;
  