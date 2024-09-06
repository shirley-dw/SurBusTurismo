//Importo librerias
import React, { useState } from 'react';
import { PiVanBold } from "react-icons/pi";

//Importo estilos
import './AcordionAbout.css';

const AcordionAbout = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    {
      title: 'Mas de 25 años viajando juntos',
      content: 'Somos una agencia de viajes dedicada a crear momentos inolvidables junto a nuestros pasajeros.'
    },
    {
      title: 'Puntualidad y Eficiencia',
      content: 'Nos comprometemos a cumplir con los horarios establecidos, asegurando que llegues a tu destino a tiempo.'
    },
    {
      title: 'Atención Personalizada',
      content: 'Nuestro equipo de profesionales está dedicado a ofrecer un servicio amable y atento, adaptado a las necesidades de cada cliente.'
    },
    {
      title: 'Amplia Cobertura',
      content: 'Ofrecemos traslados a una variedad de destinos nacionales '
    },
    {
      title: 'Experiencia y Conocimiento',
      content: 'Nuestra larga trayectoria nos permite ofrecer un servicio experto y bien informado, asegurando una experiencia de viaje excepcional. '
    },
  ];

  return (
    <div className="accordion-about">
      {accordions.map((accordion, index) => (
        <div className="accordion-about-me" key={index}>
          <div className="accordion-header-about" onClick={() => handleToggle(index)} >
            <PiVanBold 
            className={openIndex === index ? 'icon-open' : 'icon-closed'} />
            <h2 className="accordion-title-about"> {accordion.title} </h2>
            <span className={openIndex === index ? 'icon-minus' : 'icon-plus'} />
          </div>
          <div className={`accordion-content-about ${openIndex === index ? 'open' : ''}`}>
            <p>{accordion.content}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcordionAbout;