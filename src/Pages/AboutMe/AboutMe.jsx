import React from 'react';
import './AboutMe.css';
import FormContact from '../../Components/FormContact/FormContact';


const AboutMe = () => {
    return (
        <div className="section-container">
            <div className="info-container">
                <h1 className="title">Por qué elegirnos</h1>
                <p className="description-about">
                   <strong>Desde 1995</strong>, nos dedicamos a la prestación de servicios de transportes especializados,
                    realizando todo tipo de traslados turísticos, empresariales, eventos privados, culturales
                    o corporativos, dentro del área metropolitana de Buenos Aires.
                </p>
                <div className='
                btn-container'>
                <button className="btn-service-about">VER EMPRESA</button>
                <button className="btn-service-about">VER HISTORIA</button>
                </div>
            </div>
            <FormContact />

        </div>
    );
};

export default AboutMe;

