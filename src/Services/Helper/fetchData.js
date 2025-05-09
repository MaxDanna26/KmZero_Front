export const fetchData = async (url, payload = null) => {

  if (payload != null) {

    console.log(payload);


    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
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

  } else {

    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
  }

};