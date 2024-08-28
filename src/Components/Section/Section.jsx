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
                 <div className='footer-section'>
                  <div className='service'>
                  <div className='service-company'>
                  <h1 className='service-title'>SERVICIO DE TRANSPORTE PARA EMPRESAS</h1>
                  <span className='description-service'>Brindamos atención a todas las empresas que deseen trasladar a sus ejecutivos o empleados, asegurando calidad, seguridad y confort en nuestros servicios.</span>
                  <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Contactate</a></button>
                  </div>
                  <div className='service-private'>
                  <h1 className='service-title'>SERVICIO DE TRANSPORTE A PARTICULARES</h1>
                  <span className='description-service'>Damos atención a todas las personas que deseen trasladarse de forma privada a cualquier destino del País, asegurando calidad, seguridad y confort.</span>
                  <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Contactate</a></button>
                  </div>
                  </div>
                 </div>
      </div>
    </main>
  )
}

export default Section;