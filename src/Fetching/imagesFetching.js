// Fetching Images

export const ObtenerImages = async () => {
    try {
      const response = await fetch('/carrousel.json', { method: "GET" });
      return response.json();
    } 
    catch (error) {
      console.log(error);
    }
  };