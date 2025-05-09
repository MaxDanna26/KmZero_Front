import { fetchData } from '../../Services/Helper/fetchData';
import { setProducts } from './productSlice';

const apiUrl = import.meta.env.VITE_API_URL;

export const startLoadingProducts = () => {
  return async(dispatch) => {
    const res = await fetchData(apiUrl + '/product')
    dispatch(setProducts(res.data))
    
  }
}