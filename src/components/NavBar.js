import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import Imagen from '../assets/cartwidget/cart1.png';
import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <>
            <Link to='/' style={{textDecoration: "none", color: "green", padding: "20px"}}>Triskel Macrame</Link>
            <Link to='/category/1' style={{textDecoration: "none", color: "green", padding: "10px"}}>Home</Link>
            <Link to='/category/2' style={{textDecoration: "none", color: "green", padding: "10px"}}>Portamaceta</Link>
            <Link to='/category/3' style={{textDecoration: "none", color: "green", padding: "10px"}}>Tapiz</Link>
            <Link to='/category/4' style={{textDecoration: "none", color: "green", padding: "10px"}}>Accesorios</Link>
            <CartWidget imagen={Imagen} />        
        </>
    );
}

export default NavBar;