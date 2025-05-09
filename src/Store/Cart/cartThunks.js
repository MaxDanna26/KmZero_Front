import { addProduct } from './cartSlice';

export const addProductToCart = (product) => {
    
  return async(dispatch) => {
    dispatch(addProduct(product));
  }
}