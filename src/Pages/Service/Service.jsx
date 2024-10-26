import React from 'react';
import { useParams } from 'react-router-dom';
import { useServicios } from '../../hooks/useServicios';
import Header from '../../Components/Header/Header.jsx';
import './Service.css';

const Service = () => {
    const { id } = useParams();
    const { servicios, loading, error } = useServicios();
    const service = servicios.find(service => service.id === parseInt(id, 10));

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className='service-container'>
            <Header />
            <div className='service-content'>
                <div className='service-main'>
                <div className='service-info'>
                    <h1 className='title-service-major'>Seguridad  |  Puntualidad  |  Eficiencia</h1>
                    <p className='description-service'>Desde hace más de 20 años, nos especializamos en ofrecer a múltiples Empresas nuestro excelente servicio. </p>
                    <p className='description-service'> Es por esto que, ahora, muchos clientes de grandes sectores empresariales o industriales. </p>
                    <p className='description-service'>Nos confían el traslado de personal administrativo y operativo.</p>
                    <button className='btn-service'>Ver todos los servicios</button>
                    </div>
                </div>
                <ul className='service-grid'>
                    {servicios.map((service, index) => (
                        <li key={index} className='service-card'>
                            <img src={service.image} alt={service.title} className='service-image' />
                            <h2 className='title-service'>{service.title}</h2>
                            <p className='description-service-major'>{service.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Service;
