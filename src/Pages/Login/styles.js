import styled from 'styled-components'

export const Fondo = styled.div`
  min-height: 100vh;
  background-color: #fff8e1;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  position: fixed;
  left: 25%;
  bottom: 0%;

    @media (min-width: 768px) {
    left: 42%;
    right: 10%;
    top: 85%;
    transform: translateY(-50%);
  }
`;

export const Container = styled.div`
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

  @media (min-width: 768px) {
    left: 35%;
    right: 10%;
    transform: translateY(-50%);
  }
  
`;

export const SignUpContainer = styled.div`
  max-width: 400px;
  padding: 15px;
  background-color: #fae7cd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: fixed;
  left: 10%;
  right: 10%;
  top: 57%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    left: 35%;
    right: 10%;
    transform: translateY(-50%);
  }
  
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #010101;
  margin-bottom: 20px;
`;

export const InputCarne = styled.input`
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

export const SignInButton = styled.button`
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

  &:hover {
    background-color: #419644;
  }
`;

export const LoginLink = styled.p`
  font-family: "Poppins", sans-serif;
  color: black;
  font-size: 14px;
  margin: 10px 0;
`;

export const StyledSpan = styled.span`
  color: #6d1b01;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #bf360c;
  }
`;

export const TermsText = styled.p`
  font-family: "Arial", sans-serif;
  color: black;
  font-size: 12px;
  margin: 5px 0;
`;

export const SignUpButton = styled.button`
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

  &:hover {
    background-color: #419644;
  }
`;

// Modal Styles
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff9f0;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  overflow-y: auto;
  max-height: 80%;
`;

export const ModalText = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
  text-align: justify;
  overflow-y: scroll;
  max-height: 300px;
  margin: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin: 10px 0;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 8px;
  border-color: #4caf50;
  cursor: pointer;

  &:hover {
    background-color: #419644;
  }
`;

