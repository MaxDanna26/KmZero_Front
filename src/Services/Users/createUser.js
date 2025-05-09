  
  const apiUrl = import.meta.env.VITE_API_URL;

  export const createUser = async (client) => {

    const { email, password, userName } = client

    try {
      const response = await fetch( apiUrl + '/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, userName,  fk_rol: 1 })
      });
  
      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };