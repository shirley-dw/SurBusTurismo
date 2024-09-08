//Importo librerias
import React from 'react';
import { useEffect,useState } from 'react';
import chroma from 'chroma-js';
//Importo estilos
import './AboutMe.css'

const AboutMe = () => {
   
    const [aboutMe, setAboutMe] = useState({
        Puntualidad: 80,
        Seguridad: 90,
        Responsabilidad: 95,
        Profesionalismo: 85,
        Compromiso: 90,
        Respeto: 95,
        Confort: 90
    })
    const colors = chroma.scale(['#F36D00', '#4E98E7', '#5AFF5A', ]).mode('lab').colors(Object.keys(aboutMe).length);
    useEffect(() => {
        
    })
    return (
        <div className='about-container'>
            <div className='about-content'>
                <h1 className='title-about'>Empresa</h1>
                <div className='about-section'>
                    <div className='about-company'>
                        <h2 className='subtitle-about'>Nosotros</h2>
                        <span className='description-about'>Somos una agencia de viajes dedicada a crear momentos inolvidables para nuestros clientes.</span>
                        <span className='description-about'>Trabajando hace mas de 25 años en traslado de pasajeros aseguramos la calidad, el confort y la seguridad en cada uno de nuestros viajes.</span>
                        <span className='description-about'>Sur Bus se destaca por ofrecer un Servicio Puntual, realizando traslado y recepción de pasajeros en los distintos aeropuertos del país y terminales de ömnibus. </span>
                        <span className='description-about'>En nuestra agencia de viajes contamos con personal altamente calificado y con experiencia en el servicio de traslado de pasajeros. </span>
                    </div>         
                        <ul className='caracteristics'>
                            {Object.keys(aboutMe).map((key, index) => (
                                <li key={index} className='li-caracteristics'>
                                    <div className='progress-bar'>
                                        <div className='progress' style={{ width: `${aboutMe[key]}%`, backgroundColor: `${colors[index]}` }}>
                                            <h3 className='caracteristic-title'>{key}</h3>
                                            <p className='description-caracteristics'>{aboutMe[key]}%</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default AboutMe
/*   <div className='about-company'>
            <h1 className='title-about'>Empresa</h1>
            <span className='description-about'>Somos una agencia de viajes dedicada a crear momentos inolvidables junto a nuestros pasajeros.</span>
            <span className='description-about'>En Sur Bus Turismo ofrecemos servicios de traslado de personal para empresas y a particulares, con horarios flexibles acordes a las necesidades operativas de nuestros clientes.</span>
            <span className='description-about'>Sur Bus se destaca por ofrecer un Servicio Puntual, realizando traslado y recepción de pasajeros en los distintos aeropuertos del país y terminales de ómnibus. También brindamos servicios de traslados a toda la costa e interior de nuestro país, servicios de transporte de personas para eventos empresariales, casamientos, días de campo, cenas y turismo nacional… estos solo son algunos de nuestros servicios.</span>
            <span className='description-about'>Los vehículos son conducidos por sus propios dueños con amplia experiencia en el traslado de pasajeros, quienes poseen registro profesional que dan garantía y confianza a todos aquellos que contratan nuestros servicios.</span>
            <span className='description-about'><b>Garantizamos una excelente atención, puntualidad, seguridad y confort.</b></span>
            <span className='description-about'>Cualquier consulta o sugerencia no dude en comunicarse enviándonos un e-mail a alankokoravec@gmail, o a través de nuestros formularios de contacto.</span>
            </div>
            
            
            
                <h1 className='title-about'>Empresa</h1>
            <AcordionAbout />
            </div>
            <img src="./imagenes/sprinterpng.png" alt="" />
            
                 </div>
            
            */