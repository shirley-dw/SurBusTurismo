import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import './CarouselResume.css';
import 'react-multi-carousel/lib/styles.css';
import ObtenerTestimonios from '../../Fetching/testimonialsFetching.js';

const CarouselResume = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const data = await ObtenerTestimonios();
            setImages(data);
        };
        fetchTestimonials();
    }, []);

    const handleBeforeChange = (nextSlide) => {
        setCurrentSlide(nextSlide);
    };

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

    return (
        <div className='carousel-container-review'>
            <div className='carousel-content-review'>
                <Carousel
                    responsive={responsive}
                    className='carousel'
                    beforeChange={handleBeforeChange}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                   
                >
                    {images.length > 0 ? (
                        images.map((image, index) => (
                            <div
                            
                                className={`carousel-card-review ${index === currentSlide ? 'active' : ''}`}
                                key={image.id}
                            >
                                <img src={image.image} alt={image.title} className="testimonial-image" />
                                <h2 className='carousel-title'>{image.title}</h2>
                                <p className='carousel-description'>{image.description}</p>
                                <p className='carousel-author'>{image.author}</p>
                                
                            </div>
                        ))
                    ) : (
                        <div className="empty-message">No testimonials available.</div>
                    )}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselResume;
