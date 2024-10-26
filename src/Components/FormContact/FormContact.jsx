import React from 'react';
import './FormContact.css';

const FormContact = () => {
    return (
        <div className="form-container">
            <h1 className='title-form' >Reserve su traslado</h1>
        <form className="reservation-form">
        <input type="text" placeholder="Nombre y Apellido" className="form-input" />
        <input type="text" placeholder="Destino" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <textarea placeholder="Escribe tu mensaje" className="form-textarea"></textarea>
        
        <button type="submit" className="btn-submit">ENVIAR</button>
    </form>
    </div>
    );
};  

export default FormContact;