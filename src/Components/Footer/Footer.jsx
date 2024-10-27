import React from 'react';
import './Footer.css';
import { FaCheck } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <img src="/imagenes/logo.png" alt="" className="logo-footer" />
        <p className='footer-description'>Seguinos en nuestras redes sociales</p>
        <div className="social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="redes">
            <img src="/imagenes/facebook.png" alt="" className="redes-logo" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="redes">
            <img src="/imagenes/instagram.png" alt="" className="redes-logo" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" className="redes">
            <img src="/imagenes/whatsapp.png" alt="" className="redes-logo" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-subtitle">NUESTROS SERVICIOS</h2>
        <div className="footer-list">
          <ul className="column">
            <li className='footer-li' ><FaCheck className='footer-icon'/>Transporte de Personal</li>
            <li className='footer-li'><FaCheck className='footer-icon' />Servicio de Combis</li>
            <li className='footer-li'><FaCheck className='footer-icon' />Transfer a Aeroparque</li>
            <li className='footer-li'><FaCheck className='footer-icon' />Alquiler de Minibus</li>
            <li className='footer-li'><FaCheck className='footer-icon' />Charter para Empresas</li>
          </ul>
          <ul className="column">
            <li className='footer-li'><FaCheck className='footer-icon' />Transportes para Eventos</li>
            <li className='footer-li'><FaCheck className='footer-icon' />Jugadores de Golf</li>
            <li className='footer-li'><FaCheck className='footer-icon' />Traslados Grupales</li>
            <li className='footer-li'><FaCheck className='footer-icon' />Agencias de Viajes</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-subtitle">DATOS DE CONTACTO</h2>
        <p className='footer-description'>Email: Info@surbusturismo.com.ar</p>
        <p className='footer-description'>WhatsApp: 1164422009</p>
      </div>
    </footer>
  );
};

export default Footer;
