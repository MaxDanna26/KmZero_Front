import { useState } from "react";
import NavBar from "../../Shared/Components/NavBar/NavBar";
import {
  Container,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  Textarea,
  Button,
} from "./Contacto.styles";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <NavBar showSearch={false} />
      <Container>
        <Title>Contáctanos</Title>
        <Subtitle>
          ¿Tienes alguna duda, sugerencia o simplemente quieres saludarnos?
          ¡Escríbenos!
        </Subtitle>

        <Form>
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
          />

          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            rows="6"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.mensaje}
            onChange={handleChange}
          />

          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Contacto;
