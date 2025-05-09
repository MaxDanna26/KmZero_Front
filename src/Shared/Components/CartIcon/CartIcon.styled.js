import styled from 'styled-components';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

export const CartCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  transform: translate(40%, -40%);
  font-weight: bold;
`;


export const StyledCartIcon = styled(ShoppingCartIcon)`
  width: 28px;
  height: 28px;
  color: white;
`;


export const CarritoFlotante = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffb74d;
  border-radius: 50%;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff9800;
  }
`;
