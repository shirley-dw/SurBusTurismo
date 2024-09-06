//Importo librerias
import React from 'react';
//Importo estilos
import './Testimonials.css'
// Importo componentes
import Carrousel from '../../Components/Carrousel/Carrousel';
const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <div className='testimonials-content'>
        <h1 className='title-testimonials'>Testimonios</h1>
        <div className='testimonials'>
        <article className='testimony'>
            <h2 className='title-testimony'>Experiencia General</h2>
            <span className='description-testimony'>“Nuestro viaje a Tandil fue increíble. La agencia se encargó de todos los detalles, desde los traslados hasta las excursiones. ¡No tuvimos que preocuparnos por nada!.”-<b>Natalia</b></span>
        </article>
        <article className='testimony'>
            <h2 className='title-testimony'>Atención al Cliente</h2>
            <span className='description-testimony'>“El equipo de atención al cliente fue excepcional. Nos ayudaron a resolver todas nuestras dudas y nos dieron recomendaciones excelentes para nuestro viaje.”-  <b>Ana</b> </span>
        </article>
        <article className='testimony'>
            <h2 className='title-testimony'>Viajes de Negocios</h2>
            <span className='description-testimony'>“La agencia se encargó de todos los arreglos para mi viaje de negocios. Todo salió perfecto y pude concentrarme en mi trabajo sin preocupaciones.”-<b>Marcos</b></span>
        </article>
        <article className='testimony'>
            <h2 className='title-testimony'>Viajes en Familia</h2>
            <span className='description-testimony'>“Viajamos con nuestros hijos a por Cordoba. La agencia se aseguró de que cada detalle estuviera cubierto, hizo que nuestro viaje fuera inolvidable.”- <b>Familia 'Andrade'</b></span>
        </article>
        
    </div>
        <Carrousel/>
   
    </div>
    </div>
    
  )
}

export default Testimonials