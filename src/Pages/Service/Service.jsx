//Importo librerias
import React from 'react';
import { PiVanBold } from "react-icons/pi";
//Importo estilos
import './Service.css';
const Service = () => {
  return (
    <div className='service-container'>
      <div className='service-content'>
        <h1 className='title-service-major'>Nuestros servicios</h1>
        <span className='description-service-major'>Brindamos atención a todas las personas que deseen trasladarse asegurando calidad, seguridad y confort en nuestros servicios.</span>
       
        <div className='footer-section'>
                  <div className='service'>
                  <div className='service-company'>
                  <h1 className='service-title'> <PiVanBold className='icon-van'/> SERVICIO DE TRANSPORTE PARA EMPRESAS</h1>
                  <span className='description-service'>Brindamos atención a todas las empresas que deseen trasladar a sus ejecutivos o empleados, asegurando calidad, seguridad y confort en nuestros servicios.</span>
                  <br />
                  <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Contactate</a></button>
                  </div>
                  <div className='service-private'>
                  <h1 className='service-title'> <PiVanBold className='icon-van'/> SERVICIO DE TRANSPORTE A PARTICULARES</h1>
                  <span className='description-service'>Damos atención a todas las personas que deseen trasladarse de forma privada a cualquier destino del País, asegurando calidad, seguridad y confort.</span>
                  <br />
                  <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Contactate</a></button>
                  </div>
                  <div className='service-tourism'>
                  <h1 className='service-title'> <PiVanBold className='icon-van'/> SERVICIO DE TURISMO NACIONAL</h1>
                  <span className='description-service'>Ofrecemos servicios de turismo nacional para todos aquellos que deseen explorar las maravillas de nuestro país. Garantizamos calidad, seguridad y confort en cada uno de nuestros viajes, asegurando una experiencia inolvidable para nuestros clientes.</span>
                  <br />
                  <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Contactate</a></button>
                  </div>
                  </div>
                  </div>
      </div>
    </div>
  )
}

export default Service;
