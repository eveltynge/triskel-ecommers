import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top">
            <a className="navbar-brand" href="index.html"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav nav-tabs">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="views/portamaceta.html">Portamaceta</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="views/tapiz.html">Tapiz</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Accesorios
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="views/contacto.html">Contacto</a>
                    </li>
                </ul>
                </div>
        </nav> 
    );
}

export default NavBar;