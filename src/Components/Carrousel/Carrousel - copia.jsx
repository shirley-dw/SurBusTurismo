//Importo librerias
import React from 'react';
 import { useEffect, useState } from 'react'; 
 import Carousel from 'react-multi-carousel';

//Importo estilos
import './Carrousel.css';
import 'react-multi-carousel/lib/styles.css';
//Importo imagenes
import { ObtenerImages } from "../../../src/Fetching/imagesFetching.js";

const Carrousel = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    escritorio: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tableta: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    móvil: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    ObtenerImages().then((data) => setImages(data));
  }, []);

  const handleBeforeChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  return (
    <div className='carrousel-container'>
      <div className='carrousel-content'>
        <Carousel
          responsive={responsive}
          className='carrousel'
          beforeChange={handleBeforeChange}
        >
          {images.map((image, index) => (
            <div
              className={`carrousel-item ${index === currentSlide + 1 ? 'active' : ''}`}
              key={image.id}
            >
              <img src={image.image} alt={image.title} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carrousel;
