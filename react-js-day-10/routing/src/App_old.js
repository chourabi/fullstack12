import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import SubjectsPage from './pages/SubjectsPage';
import AuthPage from './pages/AuthPage';


function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li> 
              <Link to="/">Home</Link>
            </li>
            <li> 
              <Link to="/about">About</Link>
            </li>
            <li> 
              <Link to="/subjects">Subjects</Link>
            </li>
            


            
            
          </ul>
        </nav>


        <Switch>

          <Route path="/about">
            <AboutPage/>
          </Route>




          <Route path="/profile/:hero/:name">
            <ProfilePage/>
          </Route>
          

          <Route path="/subjects">
            <SubjectsPage/>
          </Route>

          <Route path="/auth">
            <AuthPage/>
          </Route>

          

          <Route path="/">
            <HomePage/>
          </Route>
          
          

        </Switch>





      </div>

      

    </Router>

  );
}

export default App;
