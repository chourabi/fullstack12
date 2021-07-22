import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../pages/Comps/navbar";
class MoviesHome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }


        this.searchingFor = this.searchingFor.bind(this);
    }


    componentDidMount(){
        this.getMoviesList();
    }

    getMoviesList(){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=j4kc353ahuu1urg59dn6c62g14");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/list_movies.json", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.data.movies)
            this.setState({
                movies:result.data.movies
            })
        })
        .catch(error => console.log('error', error));
    }


    searchingFor(str){
        console.log("search for...",str);

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=j4kc353ahuu1urg59dn6c62g14");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/list_movies.json?query_term="+str, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.data.movies)
            this.setState({
                movies:result.data.movies != null ? result.data.movies:[]
            })
        })
        .catch(error => console.log('error', error));
        
    }

    render(){
        return(
            <div>
                <NavBar searchFN={this.searchingFor} />


                <div className="container mt-5">
                <h1>Movies List</h1>


                <div className="row">
{
    /*onClick={ ()=>{
        console.log(m.id);
        this.props.history.push('/movie/'+m.id);

    } }*/
}

                    {
                        this.state.movies.map((m)=>{
                            return (
                                <div className="col-sm-6 col-md-3 mt-2"    >
                                    <Link to={'/movie/'+m.id }>
                                        <div class="card movie" style={{width:'100%',position:'relative'}}>

                                            <div className="movie-title">{m.title}</div>
                                            <img src={m.large_cover_image} class="card-img-top" alt="" />

                                            
                                        </div>
                                    </Link>
                                </div>
                            );
                            
                            
                        })
                    }

                </div>
            </div>



            </div>


        );
    }
}

export default MoviesHome;