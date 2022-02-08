import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import Imagen from '../assets/cartwidget/cart1.png';

const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top">
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
        <CartWidget imagen={Imagen} />
    </>    
    );
}

export default NavBar;