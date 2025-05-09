import { XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef } from "react";
import LogoImg from "../../../Assets/KmZero.png";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import {
  BottomLogo,
  HamburguerMenuContainer,
  ListStyle,
  XMarkIconStyled,
} from "./HamburguerMenu.styles";

const HamburguerMenu = ({ isVisible, changeIsVisible }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        changeIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, changeIsVisible]);

  return (
    <div>
      <HamburguerMenuContainer $isVisible={isVisible} ref={menuRef}>
        <XMarkIconStyled>
          <XMarkIcon
            onClick={() => changeIsVisible(false)}
            className="h-6 w-6 text-black block sm:hidden cursor-pointer"
          />
        </XMarkIconStyled>

        <ListStyle>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/SobreNosotros">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="/Proveedores">Nuestros proveedores</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ListStyle>

        <BottomLogo src={LogoImg} alt="Logo KmZero" />
      </HamburguerMenuContainer>
    </div>
  );
};

export default HamburguerMenu;

// props validation
HamburguerMenu.propTypes = {
  isVisible: propTypes.bool,
  changeIsVisible: propTypes.func,
};
