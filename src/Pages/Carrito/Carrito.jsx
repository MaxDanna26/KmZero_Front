import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Shared/Components/NavBar/NavBar";
import styled from "styled-components";
import {
  cleanCart,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../../Store/Cart/cartSlice";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react';
import { sendPayout } from '../../Services/Payout/sendPayout';
import { CarritoDirectionPopup } from './components/CarritoDirectionPopup';

const Carrito = () => {
  const { productsCartList } = useSelector(store => store.cart);
  const dispatch = useDispatch()
  const [responseUrl, setResponseUrl] = useState(null)
  const [showPopup, setShowPopup] = useState(false);
  const total = productsCartList.reduce((acc, product) => {
    return acc + (product.price || 0) * product.quantity;
  }, 0);

  const handleSubmitUserData = (userData) => {
    // Aquí podrías enviar también los datos del usuario si `sendPayout` los necesita
    sendPayout(productsCartList, userData)
      .then((e) => {
        if (e.ok) {
          dispatch(cleanCart())
          setResponseUrl(e.data.url);
        }
        console.log(e);
      });
    setShowPopup(false);
  };

  useEffect(() => {
    if (responseUrl !== null) {
      window.location.href = responseUrl;
    }
  }, [responseUrl]);

  
  return (
    <>
      <NavBar showSearch={true} />

      <Contenido>
        <Titulo>Tu carrito</Titulo>

        {productsCartList.length === 0 ? (
          <Parrafo>Tu carrito está vacío.</Parrafo>
        ) : (
          <ListaProductos>
            {productsCartList.map((product) => (
              <Producto key={product.id}>
                <img src={product.image} alt={product.name} />
                <Info>
                  <p>{product.name}</p>
                  <CantidadControl>
                    <BotonCantidad
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                    >
                      -
                    </BotonCantidad>
                    <span>{product.quantity}</span>
                    <BotonCantidad
                      onClick={() => dispatch(increaseQuantity(product.id))}
                    >
                      +
                    </BotonCantidad>
                  </CantidadControl>
                  <p>
                    Subtotal: {(product.price * product.quantity).toFixed(2)}€
                  </p>
                </Info>
                <BotonEliminar
                  onClick={() => dispatch(removeProduct(product.id))}
                >
                  <TrashIcon />
                </BotonEliminar>
              </Producto>
            ))}
          </ListaProductos>
        )}
      </Contenido>
      <Subbar>
      <Total>Total: {total.toFixed(2)}€</Total>
      <BotonPagar disabled={productsCartList.length === 0} onClick={() => setShowPopup(true)} >Pagar</BotonPagar>
      </Subbar>
      {showPopup && (
        <CarritoDirectionPopup
          onSubmit={handleSubmitUserData}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Carrito;
const ListaProductos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 10px;
`;
const Producto = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #333;

  p {
    margin: 0.2rem 0;
  }
`;

const Contenido = styled.div`
  padding: 100px 1.5rem 100px; /* margen top por el NavBar y bottom por la Subbar */
  font-family: "Poppins", sans-serif;
  height: 100%;
  min-height: 100vh;
`;

const Titulo = styled.h1`
  font-size: 1.8rem;
  color: #388e3c;
  margin-bottom: 1rem;
`;

const Parrafo = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Subbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background-color: #fff5d4;
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.05);
  font-family: "Poppins", sans-serif;

  @media (max-width: 600px) {
    padding: 0.8rem 1rem;
    flex-direction: column;
    height: auto;
    gap: 0.5rem;
  }
`;

const Total = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const BotonPagar = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;
const CantidadControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const BotonCantidad = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

const BotonEliminar = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto;
  width: 20px;

  &:hover {
    color: #b71c1c;
  }
`;
