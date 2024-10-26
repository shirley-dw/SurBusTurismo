import React, { useEffect, useState } from 'react';
import { obtenerMain } from '../../../src/Fetching/mainFetching.js';
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { useParams } from 'react-router';
import './Section.css';

const Section = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await obtenerMain();
                if (result) {
                    setData(result);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <main className="service-container-">
            {data.length > 0 && (
                <div className="carousel-item" style={{ backgroundImage: `url(${data[currentIndex].image})` }}>
                    <div className="carousel-content">
                        <h2 className="title-service">{data[currentIndex].title}</h2>
                        <button className="service-button" onClick={handleNext}>
                            {data[currentIndex].button}
                            <FaCircleArrowRight className="arrow-icon" />
                        </button>
                    </div>
                    <div className="carousel-controls">
                        <button className="prev" onClick={handlePrev}><IoIosArrowDropleft className="arrow-controls" /></button>
                        <button className="next" onClick={handleNext}><IoIosArrowDropright className="arrow-controls" /></button>
                    </div>
                    <div className="carousel-dots">
                        {data.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Section;



