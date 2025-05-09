import { createSlice } from '@reduxjs/toolkit';

const savedCart = JSON.parse(localStorage.getItem('cart'));
const initialState = savedCart || {
  productsCounter: 0,
  productsCartList: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const existingProduct = state.productsCartList.find(item => item.id === payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productsCartList.push({ ...payload, quantity: 1 });
      }
    
      state.productsCounter += 1;
    },
    increaseQuantity: (state, action) => {
      const product = state.productsCartList.find(p => p.id === action.payload);
      if (product) {
        state.productsCounter += 1;
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.productsCartList.find(p => p.id === action.payload);
      if (product && product.quantity > 1) {
        state.productsCounter -= 1;
        product.quantity -= 1;
      } else if (product && product.quantity === 1) {
        state.productsCartList = state.productsCartList.filter(p => p.id !== action.payload);
        state.productsCounter -= 1;
      }
    },
    removeProduct: (state, action) => {
      const productToRemove = state.productsCartList.find(
        product => product.id === action.payload
      );
    
      if (productToRemove) {
        state.productsCounter -= productToRemove.quantity;
      }
    
      state.productsCartList = state.productsCartList.filter(
        product => product.id !== action.payload
      );
    },
    cleanCart: (state) => {
      state.productsCounter = 0;
      state.productsCartList = []
    }   
  
  }
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct, cleanCart } = cartSlice.actions;
