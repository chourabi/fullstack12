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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';

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
          <Route path="/create-account" component={ Signup} exact />
          
           
          
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
