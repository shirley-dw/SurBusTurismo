const ObtenerTestimonios = async () => {
    try {
        const response = await fetch('/testimonials.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
};

export default ObtenerTestimonios;

