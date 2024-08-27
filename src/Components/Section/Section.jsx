//Importo librerias
import React from 'react'
//Importo estilos
import './Section.css'
// Importo componentes
import AcordionList from '../AcordionList/AcordionList.jsx'

const Section = () => {
  return (
    <main className='section'>
      <div className='section-container'>
        <h1 className='title'>Sur Bus Turismo</h1>
        <span className='description'>Nuestras prinicipales caracteristicas</span>
       <AcordionList/>
     
      </div>
  
    </main>
  )
}

export default Section