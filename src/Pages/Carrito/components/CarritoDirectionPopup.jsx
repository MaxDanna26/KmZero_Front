// components/CarritoDirectionPopup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const Modal = styled.div`
  max-width: 400px;
  padding: 20px;
  background-color: #fae7cd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: fixed;
  left: 10%;
  right: 10%;
  top: 47%;
  transform: translateY(-50%);
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    left: 35%;
    right: 10%;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 8px;
  margin: 10px 0;
  border: 2px solid #6c332b;
  background-color: #fff9f0;
  border-radius: 6px;
  font-size: 16px;

  &::placeholder {
    color: #795548;
    font-style: italic;
    opacity: 0.8;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-weight: bold;
  transition: background 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #419644;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  float: right;
  cursor: pointer;
`;

const SubText = styled.p`
  font-family: "Poppins", sans-serif;
  color: #010101;
  font-size: 14px;
  `;

export const CarritoDirectionPopup = ({ onSubmit, onClose }) => {
  const [form, setForm] = useState({ address: "", phone: "", email: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.address || !form.phone || !form.email) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    onSubmit(form);
  };

  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose}>✕</CloseBtn>
        <h2>Detalles de envío</h2>
        <Input name="address" placeholder="Dirección" onChange={handleChange} />
        <Input name="phone" placeholder="Teléfono" onChange={handleChange} />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Confirmar y pagar</Button>
        <SubText>
          O <Link to={"/login"}>registrate aquí</Link> y obtén increíbles
          beneficios.
        </SubText>
      </Modal>
    </Overlay>
  );
};
