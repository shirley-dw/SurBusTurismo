import React from "react";
import { useTestimonials } from "../../hooks/useTestimonials.js";
import "./Testimonys.css";
import { useParams } from "react-router";

import CarouselResume from "../../Components/CarouselResume/CarouselResume.jsx";
import  AcordionList from "../../Components/AcordionList/AcordionList.jsx";

const Testimonials = () => {
    const { id } = useParams();
    const { testimonials } = useTestimonials(id);
    return (
        <div className="testimonials-container">
            <div className="testimonials-content">

                    <div className='testimony-info'>
                    <h1 className='title-service-major'>ATENCION   |   COMPROMISO  |   ENTREGA</h1>
                    <p className='description-testimonys'>Desde hace más de 20 años, Sur Bus Turismo se ha dedicado a transformar cada viaje en una experiencia inolvidable.</p>
                    <p className='description-testimonys'> Nos especializamos en ofrecer a nuestros clientes un servicio turístico familiar, cálido y atento.</p>
                    <a href="/testimonials" className="btn-whatsapp-fix"><img src="/imagenes/whatsapp.png" alt="" /></a>
                    </div>
                    </div>
                    <h1 className="title-testimonials-list">Nuestras reseñas</h1>
                    <p className="subtitle-testimonys">No es sorprendente que numerosos clientes de grandes sectores empresariales e industriales confíen en nosotros para el traslado de su personal administrativo y operativo. La atención personalizada y la calidad de nuestro servicio han sido la clave de nuestra permanencia en el tiempo.</p>
                    <CarouselResume />
                <AcordionList />
            </div>
      
    );
};

export default Testimonials;

  {/*  <h1 className="title-testimonials">¿Por qué elegirnos?</h1>
                    <p className="subtitle-testimonys"> <strong>Desde 1995</strong>, nos dedicamos a la prestación de servicios de transportes especializados.</p>
                    <p className="subtitle-testimonys">Realizando todo tipo de traslados turísticos, empresariales, eventos privados, culturales
                    o corporativos. </p> */}