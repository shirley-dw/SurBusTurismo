//Importo librerias
import React from 'react'
//Importo estilos
import './Service.css'
const Service = () => {
  return (
    <>
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

                  </>
  )
}

export default Service