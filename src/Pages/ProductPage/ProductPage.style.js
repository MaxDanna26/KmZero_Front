import styled from "styled-components";

export const Container = styled.div`
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  height: 100vh;
`;

export const Image = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #4caf50;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
