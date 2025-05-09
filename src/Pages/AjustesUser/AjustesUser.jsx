import { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../Shared/Components/NavBar/NavBar";
import logo from "../../Assets/KmZero.png";

const AjustesUser = () => {
  const [currentUser, setCurrentUser] = useState({
    userName: "",
  });

  const [user, setUser] = useState({
    userName: "",
    password: "",
    address: {
      street: "",
      number: "",
      postalCode: "",
      city: "",
    },
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setUser((prev) => ({
      ...prev,
      userName: currentUser.userName,
    }));
  }, [currentUser]);

  const handleUpdate = () => {
    if (user.password && user.password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setCurrentUser((prev) => ({
      ...prev,
      userName: user.userName,
    }));

    console.log("Datos actualizados:", user);
  };

  return (
    <Fondo>
      <Title>Datos personales</Title>

      <Desplegable>
        <summary>Actualizar datos personales</summary>
        <NombreActual>
          Nombre actual: <strong>{currentUser.userName}</strong>
        </NombreActual>
        <Input
          type="text"
          placeholder="Nuevo nombre de usuario"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Nueva contraseña"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Confirmar nueva contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SaveButton onClick={handleUpdate}>Guardar cambios</SaveButton>
      </Desplegable>

      <Desplegable>
        <summary>Dirección</summary>
        <Input
          type="text"
          placeholder="Calle"
          value={user.address.street}
          onChange={(e) =>
            setUser({
              ...user,
              address: { ...user.address, street: e.target.value },
            })
          }
        />
        <Input
          type="text"
          placeholder="Número"
          value={user.address.number}
          onChange={(e) =>
            setUser({
              ...user,
              address: { ...user.address, number: e.target.value },
            })
          }
        />
        <Input
          type="text"
          placeholder="Código postal"
          value={user.address.postalCode}
          onChange={(e) =>
            setUser({
              ...user,
              address: { ...user.postalCode, postalCode: e.target.value },
            })
          }
        />
        <Input
          type="text"
          placeholder="Ciudad"
          value={user.address.city}
          onChange={(e) =>
            setUser({
              ...user,
              address: { ...user.address, city: e.target.value },
            })
          }
        />
        <SaveButton onClick={handleUpdate}>Guardar cambios</SaveButton>
      </Desplegable>

      <SaveButton>Cerrar sesión</SaveButton>

      <Logo src={logo} alt="" />
    </Fondo>
  );
};

export default AjustesUser;

// Estilos
const Fondo = styled.div`
  min-height: 100vh;
  background-color: #fff8e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  font-family: "Poppins", sans-serif;
  gap: 20px;
  z-index: -10px;
`;

const Title = styled.h1`
  color: #010101;
  margin-bottom: 20px;
  text-align: center;
`;

const NombreActual = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
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

const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 40%;
  margin-top: 20px;
  font-weight: bold;
  transition: background 0.3s ease;
  align-items: center;
  margin-left: 30%;
  &:hover {
    background-color: #419644;
  }
`;

const Desplegable = styled.details`
  background-color: #fff4e1;
  border: 1px solid #d6b89c;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 20px;
  width: 80%;
  z-index: 1;

  summary {
    cursor: pointer;
    font-weight: 600;
    color: #5d4037;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  position: fixed;
  left: 25%;
  bottom: 0%;
  z-index: -1px;
`;
