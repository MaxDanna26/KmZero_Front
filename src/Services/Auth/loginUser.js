  
  const apiUrl = import.meta.env.VITE_API_URL;

  export const loginUser = async (email, password) => {
    try {
      const response = await fetch( apiUrl + '/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }
      const data = await response.json();
      
      const accessToken = data.token
      const refreshToken = accessToken;
      document.cookie = `token=${refreshToken}; path=/;`;
      
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };