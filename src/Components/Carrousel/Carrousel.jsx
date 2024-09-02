//Importo librerias
import React from 'react';
 import { useEffect, useState } from 'react'; 
//Importo estilos
import './Carrousel.css';
//Importo imagenes
import { ObtenerImages } from "../../../src/Fetching/imagesFetching.js";


const Carrousel = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    ObtenerImages().then((data) => setImages(data));
    console.log(images);
  }, [])
  ;
  return (
    <div className='carrousel'>
      {images.map((image) => (
        <div className='carrousel-item' key={image.id}>
          <img src={image} alt={image.title} />
        </div>
      ))}
    </div>
  )
}


export default Carrousel