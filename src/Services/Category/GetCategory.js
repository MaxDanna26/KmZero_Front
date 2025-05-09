import { fetchData } from '../Helper/fetchData'
const apiUrl = import.meta.env.VITE_API_URL;

export const getCategory = async () => {
  const res = await fetchData(apiUrl + '/category');
  return res.data
}