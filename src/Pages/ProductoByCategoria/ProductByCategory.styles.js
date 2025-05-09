import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100px;
  background-color: #fae2c1;
  padding: 1rem;
  border-radius: 10px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-family: "Poppins", sans-serif;


  

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #333;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;
export const Grid = styled.div`
  background-color: #fff9e7;
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
    @media (max-width: 768px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
  }  
`;