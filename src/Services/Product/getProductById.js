import { fetchData } from '../Helper/fetchData'
const apiUrl = import.meta.env.VITE_API_URL;

export const getProductById = async (id) => {
  const res = await fetchData(apiUrl + '/product/' + id);
  return res.data
}