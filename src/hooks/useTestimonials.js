import { useState, useEffect } from 'react';
import ObtenerTestimonios from '../Fetching/testimonialsFetching.js';

export const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await ObtenerTestimonios();
                setTestimonials(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return { testimonials, loading, error };
};
