import React, { useEffect } from 'react'
import { CarritoFlotante, CartCount, StyledCartIcon } from './CartIcon.styled';
import { useSelector } from 'react-redux';


export const CartIcon = () => {
  const {productsCounter} = useSelector(state => state.cart)

  
  return (
    <CarritoFlotante to="/Carrito">
      <StyledCartIcon />
      <CartCount>{productsCounter}</CartCount>
    </CarritoFlotante>
  )
}

