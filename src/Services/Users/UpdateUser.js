const apiUrl = import.meta.env.VITE_API_URL;

export const updateUser = async (id, updatedFields) => {
  const { userName, password } = updatedFields;

  try {
    const response = await fetch(`${apiUrl}/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, password })
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el usuario');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};
