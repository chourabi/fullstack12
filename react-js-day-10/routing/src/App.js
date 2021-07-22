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
import MovieDetails from './moviesPages/MovieDetails';


 


function App() {
  return (

    <Router>
      <div>
        


        <Switch> 


        <Route path="/" component={MoviesHome} exact />
        <Route path="/movie/:id" component={MovieDetails} exact />
           
          
          

        </Switch>





      </div>

      

    </Router>

  );
}

export default App;
