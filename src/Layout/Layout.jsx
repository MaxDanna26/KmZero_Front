import propTypes from "prop-types";
import NavBar from "../Shared/Components/NavBar/NavBar";
import { CartIcon } from "../Shared/Components/CartIcon/CartIcon";
import { SubBar, SubBarItem } from "../Shared/Components/NavBar/styles";
import { useEffect, useState } from "react";
import { getCategory } from "../Services/Category/GetCategory";
import { useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [category, setCategory] = useState();

  const anotherLayout =
    location.pathname === "/login" ||
    location.pathname === "/ajustes" ||
    location.pathname === "/SobreNosotros" ||
    location.pathname === "/Contacto" ||
    location.pathname === "/SobreTiendas" ||
    location.pathname === "/Carrito"
      ? false
      : true;

  useEffect(() => {
    getCategory().then(setCategory);
  }, []);

  return (
    <>
      <NavBar />
      {anotherLayout && (
        <SubBar>
          {category?.map((categoria) => (
            <SubBarItem
              key={categoria.id}
              onClick={() => navigate("/ProductoByCategoria/" + categoria.id)}
            >
              {categoria.name}
            </SubBarItem>
          ))}
        </SubBar>
      )}

      {children}
      
      {location.pathname === "/Carrito" ? <></> : <CartIcon />}
      
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node,
};
