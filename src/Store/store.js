import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Auth/authSlice';
import { storeSlice } from './Store/storeSlice';
import { categoriesSlice } from './Categories/categoriesSlice';
import { productSlice } from './Products/productSlice';
import { cartSlice } from './Cart/cartSlice';

const saveToLocalStorage = store => next => action => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart));
  return result;
};


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    store: storeSlice.reducer,
    categories: categoriesSlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveToLocalStorage)
});