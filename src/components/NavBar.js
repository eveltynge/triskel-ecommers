import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import CartWidget from './CartWidget';
import Imagen from '../assets/cartwidget/cart1.png';
import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import Logo from '../assets/image/index/logo.png';


const NavBar = () => {
    return (
        <>
            <Brand logo={Logo} style={{padding: "20px"} }>
                <Link  to='/' />
            </Brand>
            <Link to='/category/1' className="currentCategory" style={{textDecoration: "none", color: "#343232", paddingLeft: "15px", textTansform: "uppercase", fontSize: "22px"}}>Home</Link>
            <Link to='/category/2' className="currentCategory" style={{textDecoration: "none", color: "#343232", paddingLeft: "15px", textTansform: "uppercase", fontSize: "22px"}}>Portamaceta</Link>
            <Link to='/category/4' className="currentCategory" style={{textDecoration: "none", color: "#343232", paddingLeft: "15px", textTansform: "uppercase", fontSize: "22px"}}>Accesorios</Link>
            <Link to='/category/3' className="currentCategory" style={{textDecoration: "none", color: "#343232", padding: "15px", textTansform: "uppercase", fontSize: "22px"}}>Tapiz</Link>
            <CartWidget imagen={Imagen} />                    
        </>
    );
}

export default NavBar;