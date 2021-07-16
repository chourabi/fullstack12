import React from "react";

class NavBar extends React.Component {

    constructor(props){
        super(props)
        this.state={
            query:'',
            searchFunction:props.searchFN
        }
    }
 

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
    
                        </ul>
                        <form className="d-flex" onSubmit={(e)=>{
                            e.preventDefault();
                            this.state.searchFunction(this.state.query);
                        }}>
                            <input value={this.state.query} onChange={ (e)=>{ this.setState({query:e.target.value}) } } className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}


export default NavBar;