import React from 'react';
import ParentComp from './Parent';
 

class ChildComp extends React.Component{


    
    
    constructor(props){
        super(props);

        console.log(props);
        this.state = { 
            message:props.message,
            callParentFun:props.callmefn
        }
    }


 


    render(){
         
          
            return (
                <div>                               
                     <h1>i'm the child</h1>
                     <p>my parent says: {this.state.message}</p>

                     <button onClick={
                         ()=>{
                            this.state.callParentFun("hello parent!! how are you");
                         }
                     } >unsware mt parent</button>

                     
                </div>
            );
        
    }
}


export default ChildComp;