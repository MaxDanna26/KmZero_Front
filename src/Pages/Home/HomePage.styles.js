import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline';


export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: -100px;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;


@media (max-width: 768px) {
  height: 70vh;
  margin-top: 50px;
}
`;
export const DownArrow = styled(ChevronDoubleDownIcon)`
  width: 75px;
  position: absolute;
  bottom: 30px; /* para que esté un poco debajo de la imagen */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: white;

  @media (max-width: 768px) {
    bottom: -25px;
  }
`;

export const PageContainer = styled.div`
  background-color: #fff9e7;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2.5rem;
`;

export const Grid = styled.div`
  background-color: #fff9e7;
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
  }  
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #4caf50;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
  margin-top: 40px;
`;

export const MarginTitle = styled.div`
  margin-top: 140px;
`;

export const Slider = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 1rem;
  width: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const arrowStyles = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8; 
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;


export const LeftArrow = styled.button`
  ${arrowStyles}
  left: 0;
`;

export const RightArrow = styled.button`
  ${arrowStyles}
  right: 0;
`;

export const LeftIcon = styled(ChevronLeftIcon)`
  width: 24px;
  height: 24px;
  color: white;
`;

export const RightIcon = styled(ChevronRightIcon)`
  width: 24px;
  height: 24px;
  color: white;

`;


export const ProductContainer = styled.div`
  width: 200px;
  background-color: #fae2c1;
  padding: 1rem;
  border-radius: 10px;
  min-width: 200px;
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
    height: 150px;
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

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 1px;
`;
