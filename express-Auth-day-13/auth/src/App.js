import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';

class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Router>
      <div>
   
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={ Auth} exact />
           
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
