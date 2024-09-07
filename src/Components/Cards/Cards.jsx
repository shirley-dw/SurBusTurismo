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
       
      </Card>
      <Card>    
        <Card.Img variant="top" src="/imagenes/particulares.jpg" className='card-img'/>
        <Card.Body>
        <h1 className='title-card'>Servicio de traslado para particulares</h1>
        <span className='description-card'>Damos atención a todas las personas que deseen trasladarse de forma privada a cualquier destino del País, asegurando calidad, seguridad y confort.</span>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="/imagenes/turismo.jpg" className='card-img'/>
        <Card.Body>
        <h1 className='title-card'>Servicio de turismo nacional</h1>
        <span className='description-card'>Ofrecemos servicios de turismo nacional para aquellos que deseen explorar las maravillas de nuestro país. Garantizamos calidad, seguridad y confort en cada uno de nuestros viajes, asegurando una experiencia inolvidable.</span>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Cards