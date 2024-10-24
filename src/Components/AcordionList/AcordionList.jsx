//Importo librerias
import React, { useState } from 'react';
import { PiVanBold } from "react-icons/pi";

//Importo estilos
import './AcordionList.css';

const AcordionList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    {
      title: 'Seguridad y Confort',
      content: 'Nuestros vehículos están equipados con las últimas tecnologías para garantizar un viaje seguro y cómodo.'
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
    <div className="accordion-list">
      {accordions.map((accordion, index) => (
        <div className="accordion" key={index}>
          <div className="accordion-header" onClick={() => handleToggle(index)} >
            <PiVanBold 
            className={openIndex === index ? 'icon-open' : 'icon-closed'} />
            <h2 className="accordion-title"> {accordion.title} </h2>
            <span className={openIndex === index ? 'icon-minus' : 'icon-plus'} />
          </div>
          <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
            <p>{accordion.content}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcordionList;
