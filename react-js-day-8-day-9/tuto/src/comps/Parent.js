import React from 'react';
import ChildComp from './child';
 

class ParentComp extends React.Component{


    
    
    constructor(props){
        super(props);
        this.state = { 
            message:''
        }

        this.callFromChild = this.callFromChild.bind(this);
    }


    callFromChild(str){
       console.log(str);

       this.setState({
        message:str
        })
    }
 


    render(){
         
              return (
                <div>     

                                              
                     <h1>i'm the parent</h1>
                     <p>my child says : {this.state.message} </p>
                     <hr/>

                     <ChildComp message="hello child" callmefn={this.callFromChild  } />
                </div>
            );
        
    }
}


export default ParentComp;