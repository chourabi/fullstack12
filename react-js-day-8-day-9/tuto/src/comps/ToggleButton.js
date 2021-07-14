import React from 'react';

const classStyle={
    buttonOnStyle:{ backgroundColor:'red' },
    buttonOffStyle:{ backgroundColor:'green' },
    
}

class ToggleButton extends React.Component{


    
    
    constructor(props){
        super(props);
        this.state = {
            active : true
        }

        this.toggleSwitch = this.toggleSwitch.bind(this)
    }


    toggleSwitch(){
        this.setState({
            active : ! this.state.active
        })
    }



    render(){
         
         
        // className={ (this.state.active === true) ? 'magic active' : 'magic not-active' } 
            return (
                <div>                               
                    <button style={  (this.state.active === true) ? classStyle.buttonOffStyle  : classStyle.buttonOnStyle  }  
                    
                    
                    onClick={ this.toggleSwitch } > 
                    {
                        (this.state.active === true) ? 'OFF' : 'ON'
                    }
                    </button>
                </div>
            );
        
    }
}


export default ToggleButton;