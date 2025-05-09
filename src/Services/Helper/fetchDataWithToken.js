export const fetchDataWithToken = async (url) => {
    
  let refreshToken = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

  let options = {
      method: "GET",
      headers : {
          "Content-Type": "aplication/json",
          "Authorization": `${refreshToken}`,
      }
  }

  try {
      const response = await fetch(url, options);
      const jsonResponse = await response.json();
      return { 
          ok: response.ok,
          data: jsonResponse
      };
  } catch (error) {
      
      return { ok: false, error: 'Error fetching data' };
  }
};