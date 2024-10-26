import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <nav className="NavBar">
        <img src="/imagenes/logo.png" alt="" className='img'/>
        <ul className="navigate">
            <li className="nav-items"><Link to="/">Home</Link></li>
            <li className="nav-items"><Link to="/about">About</Link></li>
            <li className="nav-items"><Link to="/contact">Contact</Link></li>
            <li className="nav-items"><Link to="/service/1" className='nav-items'>Servicios</Link></li>
            <button className="btn-contact"><Link to="/contact" >Contacto</Link></button>
        </ul>
    </nav>
);

export default NavBar;

