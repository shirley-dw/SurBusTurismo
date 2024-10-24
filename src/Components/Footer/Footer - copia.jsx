//Importo librerias
import React from 'react';
//Importo estilos
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-info'>
                    <h1 className='footer-title'>SurBusTurismo</h1>
                    <span>Contactate con nosotros para mas informacion</span>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className='bx bxl-facebook-circle'></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><i className='bx bxl-whatsapp'></i></a>
                </div>
                <div className='footer-contact'>
                    <form action="" className='footer-form'>
                        <label htmlFor=""> Ingresa tu nombre</label>
                        <input type="text" placeholder='Nombre'/>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Asunto'/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer;