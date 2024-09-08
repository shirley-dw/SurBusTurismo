//Importo librerias
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

//Importo estilos
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cards = () => {
  return (
    <div className='cards'>
    <CardGroup className='cards-container' style={{ width: '900px'}}>
      <Card className='card'>
        <Card.Img variant="top" src="/imagenes/empresa.jpg" className='card-img'/>
        <Card.Body>
          <h1 className='title-card'>Servicio de traslado para empresas</h1>
          <span className='description-card'>Brindamos atención a todas las empresas que deseen trasladar a sus ejecutivos o empleados, asegurando calidad, seguridad y confort en nuestros servicios.</span>
        </Card.Body>
          <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Solicita tu presupuesto</a></button>
      </Card>
      <Card>    
        <Card.Img variant="top" src="/imagenes/particulares.jpg" className='card-img'/>
        <Card.Body>
        <h1 className='title-card'>Servicio de traslado para particulares</h1>
        <span className='description-card'>Damos atención a todas las personas que deseen trasladarse de forma privada a cualquier destino del País, asegurando calidad, seguridad y confort.</span>
        </Card.Body>
        <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Contactate</a></button>
      </Card>
      <Card>
        <Card.Img variant="top" src="/imagenes/turismo.jpg" className='card-img'/>
        <Card.Body>
        <h1 className='title-card'>Servicio de traslado turismo nacional</h1>
        <span className='description-card'>Ofrecemos servicios de turismo nacional para aquellos que deseen explorar las maravillas de nuestro país, asegurando una experiencia inolvidable.</span>
        </Card.Body>
        <button className='btn-wsp'><a href="https://wa.me/+541164422009" target="_blank" rel="noreferrer">Cronograma de viajes</a></button>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Cards