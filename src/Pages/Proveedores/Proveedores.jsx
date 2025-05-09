import NavBar from "../../Shared/Components/NavBar/NavBar";
import { ProveedoresStyles,  Title, Section, Text } from "./styles";
import React from "react";
const Proveedores = () => {
  return (
    <>
      <ProveedoresStyles >
      <Section>
        <Title>🌊Proveedores</Title>
        <Text>En <mark> kmZero</mark> nos enorgullece colaborar con proveedores comprometidos con la calidad, la sostenibilidad y la frescura. <br />
        Trabajamos cada día con profesionales locales y regionales para ofrecer a 
        nuestros clientes los mejores productos del mar, frutas frescas y verduras saludables. </Text>
        </Section>


        <Section>
        <Title>🐟 Pescadería</Title>
        <Text>Nuestros pescados y mariscos provienen de lonjas locales y pescadores responsables que garantizan productos frescos capturados de forma sostenible.
        </Text>
        </Section>

      <Section>
        <Title> 🍎Frutería </Title>
        <Text>eleccionamos nuestras frutas directamente de agricultores de confianza que cultivan con métodos naturales, asegurando sabor y frescura en cada pieza..</Text>
        </Section>

        <Section>
        <Title> 🥦 Verdura </Title>
        <Text>Colaboramos con huertas locales que nos proporcionan verduras frescas, de temporada y cultivadas sin químicos dañinos. <br />

          Gracias a nuestros proveedores, podemos ofrecer calidad, sabor y salud en cada compra.</Text>
          </Section>
          </ProveedoresStyles>
    </>
  );
};

export default Proveedores;

