import { fetchData } from '../../Services/Helper/fetchData';
import { setCategories } from './categoriesSlice';

const apiUrl = import.meta.env.VITE_API_URL;


export const startLoadingCategories = () => {
  return async(dispatch) => {
    const res = await fetchData(apiUrl+'/category')
    dispatch(setCategories(res.data))
  }
}