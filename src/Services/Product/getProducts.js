import { fetchData } from '../Helper/fetchData'
const apiUrl = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const res = await fetchData(apiUrl + '/product/');
  return res.data
}