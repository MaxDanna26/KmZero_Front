import { fetchData } from '../Helper/fetchData'
const apiUrl = import.meta.env.VITE_API_URL;

export const getProductByCategory = async (id) => {
  const res = await fetchData(apiUrl + '/product/ProductByCategory/' + id);
  return res.data
}