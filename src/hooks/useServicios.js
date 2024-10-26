import serviceFetching from "../Fetching/serviceFetching.js";
import { useState, useEffect } from "react";

export const useServicios = () => {
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServicios = async () => {
            try {
                const result = await serviceFetching();
                if (result) {
                    setServicios(result);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchServicios();
    }, []);

    return { servicios, loading, error };
}
