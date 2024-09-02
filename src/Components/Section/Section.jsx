//Importo librerias
import React from 'react';
//Importo libreria de iconos
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; 
import { FiFacebook } from "react-icons/fi";
//Importo estilos
import './Section.css';
// Importo componentes
import AcordionList from '../AcordionList/AcordionList.jsx';

const Section = () => {
  return (
    <main className='section'>
      <div className='section-container'>
        <h1 className='title'>Sur Bus Turismo</h1>
        <span className='description'>Nuestras prinicipales caracteristicas</span>
        <AcordionList />
          <h2 className='description-social'>Contactate a travez de nuestras redes sociales</h2>
        <div className='social-icons'>
          <a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">
            <FaWhatsapp  className='icons'/>
          </a>
          <a href="https://www.facebook.com/surbusturismo/" target="_blank" rel="noreferrer">
            <FiFacebook  className='icons'/>
          </a>
          <a href="https://www.instagram.com/surbusturismo/" target="_blank" rel="noreferrer">
            <FaInstagram className='icons'/>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Section;