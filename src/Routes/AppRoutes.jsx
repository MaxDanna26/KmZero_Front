import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import SobreNosotros from "../Pages/SobreNosotros/SobreNosotros";
import SobreTiendas from "../Pages/SobreTiendas/SobreTiendas";
import Contacto from "../Pages/Contacto/Contacto";
import Carrito from "../Pages/Carrito/Carrito";
import AjustesUser from "../Pages/AjustesUser/AjustesUser";
import Proveedores from "../Pages/Proveedores/Proveedores";
import { useSelector } from "react-redux";
import { ProductPage } from "../Pages/ProductPage/ProductPage";
import ProductByCategory from "../Pages/ProductoByCategoria/ProductByCategory";
import Layout from "../Layout/Layout";

// const HomePage = lazy(() => import("../Pages/Home/HomePage"));
// const LoginPage = lazy(() => import("../Pages/Login/LoginPage"));

// const SobreNosotros = lazy(() => import("../Pages/SobreNosotros/SobreNosotros"));
// // const SobreTiendas = lazy(() => import("./Pages/SobreTiendas/SobreTiendas"));
// const Contacto = lazy(() => import("../Pages/Contacto/Contacto"));
// const Carrito = lazy(() => import("../Pages/Carrito/Carrito"));
// const AjustesUser = lazy(() => import("../Pages/AjustesUser/AjustesUser"));
// const Proveedores = lazy(() => import("../Pages/Proveedores/Proveedores"));
// // const ProductPage = lazy(() => import("../Pages/ProductPage/ProductPage"));
// const ProductByCategory = lazy(() => import("../Pages/ProductoByCategoria/ProductByCategory"));


const Router = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Proveedores" element={<Proveedores />} />
          <Route path="/Producto/:id" element={<ProductPage />} />
          <Route path="/ProductoByCategoria/:CategoryId" element={<ProductByCategory />} />
          {/* Login solo visible si NO está autenticado */}
          <Route path="/login" element={status === "authenticated" ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/Ajustes" element={status === "not-authenticated" ? (<Navigate to="/login" />) : (<AjustesUser />)} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
