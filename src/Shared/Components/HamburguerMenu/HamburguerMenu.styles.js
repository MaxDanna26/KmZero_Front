import styled from 'styled-components'

export const HamburguerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff9e7;
  height: 100vh;
  width: 20%;
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isVisible ? "0" : "-90%")};
  transition: right 0.4s ease-in-out;
  padding: 2rem 1.5rem;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.2);
  z-index: 999;
  overflow: hidden;


@media (max-width: 600px) {
  width: 40%;
  right: ${(props) => (props.$isVisible ? "0" : "-100%")};
}
`;

export const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin-top: 4rem;

  li {
    list-style: none;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e0c9a6;
    opacity: 0;
    transform: translateX(20px);
    animation: slideIn 0.4s ease forwards;
  }

  li:nth-child(1) {
    animation-delay: 0.2s;
  }

  li:nth-child(2) {
    animation-delay: 0.3s;
  }

  li:nth-child(3) {
    animation-delay: 0.4s;
  }

  li:nth-child(4) {
    animation-delay: 0.5s;
  }

  a {
    text-decoration: none;
    color: #5d4037;
    font-size: 1.1rem;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #4caf50;
    }
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const XMarkIconStyled = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  svg {
    color: #5d4037;
    transition: transform 0.3s ease, color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #4caf50;
      transform: rotate(90deg); /* Gira el ícono al pasar el mouse */
    }
  }
`;

export const BottomLogo = styled.img`
  margin-top: 70px;
  align-self: center;
  opacity: 0.8;
  margin-bottom: 100px;
  height: 120px;
`;

