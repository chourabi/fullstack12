function NavBarBloc(props) {

    const menu = props.menu;

    console.log(menu);

    return (
    

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
      {
                            menu.map((m) => {
                                return (

                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href={m.path}>{m.name}</a>
                                    </li>

                                );
                            })
                        }
      </ul>
    </div>
  </div>
</nav>









    );

}


export default NavBarBloc;
