import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"; // <-- Importante
import HamburguerMenu from "../HamburguerMenu/HamburguerMenu";
import LogoImg from "../../../Assets/KmZero.png";
import { CartIcon } from "../CartIcon/CartIcon";
import { useSelector } from "react-redux";
import {
  Logo,
  MenuButton,
  NavBarContainer,
  ProfileLink,
  StyledMenuIcon,
  StyledUserIcon,
  HomeButton,
  StyledHomeIcon,
} from "./styles";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  const [isVisibleChange, setIsVisibleChange] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const handleChangeIsVisible = () => {
    setIsVisibleChange(!isVisibleChange);
  };

  const showSearch =
    location.pathname === "/login" ||
    location.pathname === "/ajustes" ||
    location.pathname === "/SobreNosotros" ||
    location.pathname === "/Contacto" ||
    location.pathname === "/SobreTiendas"
      ? false
      : true;

  return (
    <>
      <NavBarContainer>
        <Link to="/">
          <Logo src={LogoImg} $center={showSearch === false} />
        </Link>
        {showSearch && <SearchBar />}

        {showSearch && (
          <ProfileLink to={status === "authenticated" ? "/ajustes" : "/login"}>
            <StyledUserIcon />
          </ProfileLink>
        )}

        {showSearch && (
          <MenuButton
            onClick={() => setIsVisibleChange(!isVisibleChange)}
            $center={showSearch === false}
          >
            <StyledMenuIcon />
          </MenuButton>
        )}

        {!showSearch && (
          <HomeButton
            onClick={() => {
              navigate("/");
            }}
          >
            <StyledHomeIcon />
          </HomeButton>
        )}

        <HamburguerMenu
          isVisible={isVisibleChange}
          changeIsVisible={handleChangeIsVisible}
        />

        {/* CARRITO */}
        {["/", "/productos"].includes(location.pathname) && <CartIcon />}
      </NavBarContainer>
    </>
  );
};

export default NavBar;
