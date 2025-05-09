import { fetchData } from '../Helper/fetchData'
const apiUrl = import.meta.env.VITE_API_URL;

export const sendPayout = async (productCartList) => {

  const payload = {
    cartItems: productCartList.map(product => ({
      name: product.name,
      price: Math.round(parseFloat(product.price) * 100), // enviar en centavos
      quantity: product.quantity
    }))
  };
  
  const res = await fetchData(apiUrl+'/payment/checkout-session', payload);
  return res;  

}