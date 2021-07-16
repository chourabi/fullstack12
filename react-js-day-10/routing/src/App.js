import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NavBar from './pages/Comps/navbar';
import MoviesHome from './moviesPages/MoviesHome';


 


function App() {
  return (

    <Router>
      <div>
        


        <Switch> 
           <Route path="" component={MoviesHome} />
          
          

        </Switch>





      </div>

      

    </Router>

  );
}

export default App;
