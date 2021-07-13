import logo from './logo.svg';
import './App.css';
import DateComponent from './comps/Datecomponent';
import Contact from './comps/Contact';
import ContactClass from './comps/ContactClass';
import React from 'react';
import NavBarBloc from './comps/NavBarBloc';
import ArticlesBloc from './comps/ArticlesBloc';


class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      menu :[
        { name:"Acceuil", path:"#" },
        { name:"About", path:"#" },
        { name:"Contact", path:"#" },
        { name:"EXMPLE", path:"#" },
        
        
        
        
      ]
    }
  }

  render(){
    return (
      <div>
         
         {
           /**
            * <h3>My Contact list:</h3>
              <ul>
                <ContactClass fullname="chourabi taher" phone="93863732" />
                <ContactClass fullname="test user" phone="93863732" />
                
              </ul>
            */
         }


        <NavBarBloc menu = { this.state.menu } />


         <div>
           <ArticlesBloc />
         </div>


        
      </div>
    );
  }

}

export default App;
