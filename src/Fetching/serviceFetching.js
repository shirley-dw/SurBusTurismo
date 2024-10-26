 const ObtenerServicios = async () => {
    try {
        const response = await fetch('/service.json', { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching services:', error);
        return null; // Retorna null si hay un error
    }
};

export default ObtenerServicios;