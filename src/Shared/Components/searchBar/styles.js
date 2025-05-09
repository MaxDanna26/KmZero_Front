import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/solid';

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background-color: #fff5d4; /* Beige natural */ //fff8e1
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: "Poppins", sans-serif;
  gap: 0.5rem;

  @media (max-width: 600px) {
    padding: 0.8rem 1rem;
  }
`;

export const Logo = styled.img`
  top: -10px;
  height: 80px;
  transition: all 0.3s ease;

  ${({ $center }) =>
    $center &&
    `
    height: 100px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const SearchInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: 2px solid #a1887f; /* Marrón tierra */
  border-radius: 6px;
  font-size: 1rem;
  width: 300px;
  transition: border-color 0.2s ease;
  font-family: "Poppins", sans-serif;
  margin-left: 30%;

  &:focus {
    border-color: #4caf50; /* Verde hoja */
    outline: none;
  }

  @media (max-width: 550px) {
    width: 180px;
    margin-left: 0px;
  }
`;

export const MenuButton = styled.button`
  background-color: #fff5d4; /* Naranja suave */
  border: none;
  padding: 4px;
  padding-bottom: 0px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff9800; /* Naranja más fuerte */
  }

  ${({ $center }) =>
    $center &&
    `
    position: absolute;
    right: 16px;
  `}
`;

export const SubBar = styled.div`
  background-color: #fff0d5; /* Beige aún más claro */
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  position: fixed;
  top: 80px;
  width: 100%;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  font-family: "Poppins", sans-serif;

  @media (max-width: 600px) {
    gap: 0.8rem;
    font-size: 0.8rem;
    flex-wrap: wrap;
  }
`;

export const SubBarItem = styled.button`
  background: none;
  border: none;
  font-size: 0.7rem;
  font-weight: 500;
  color: #5d4037; /* Marrón oscuro */
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Poppins", sans-serif;
  padding: 0.75rem 0.5rem;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    color: black;
    background-color: #ffb74d;
    border-radius: 6px;
  }
`;

export const HomeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-family: "Poppins", sans-serif;
  margin-left: auto;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const StyledHomeIcon = styled(HomeIcon)`
  width: 30px;
  height: 30px;
  color: #5d4037;
`;

export const ProfileLink = styled(Link)`
  background: none;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff9800; /* Naranja más fuerte */
  }
`;

export const StyledUserIcon = styled(UserIcon)`
  width: 28px;
  height: 28px;
  color: #5d4037; /* Marrón oscuro */
`;

export const StyledMenuIcon = styled(Bars3Icon)`
  width: 28px;
  height: 28px;
  color: #5d4037;
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 55px;
  background-color: #fff9e7;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
  z-index: 10;
  margin-top: 4px;
  padding: 0;
  list-style: none;
  width: 40%;
  left: 25%;
  font-family: "Poppins", sans-serif;;
  `;

  export const LinkProductos = styled(Link)`
  text-decoration: none;
  `;

export const DropdownItem = styled.li`
  padding: 0.75rem;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #e0c9a6; /* Beige claro */
  color: black;
  text-decoration: none;

  &:hover {
    background: #f1f1f1;
  }

`;