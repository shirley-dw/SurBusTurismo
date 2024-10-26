export const obtenerMain = async () => {
    try {
        const response = await fetch('/main.json', { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching main data:', error);
        return null;
    }
};
