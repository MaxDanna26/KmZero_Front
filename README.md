# 🛒 Frontend KmZero – Proyecto final con React

Este proyecto representa el **frontend completo** de un eCommerce desarrollado como final de un curso de React. Es el resultado de aplicar todos los conocimientos aprendidos durante la formación, incluyendo React, Redux, Context, consumo de APIs, integración con backend y pasarela de pago con Stripe.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux](https://redux.js.org/) – Para manejar estado global
- [Axios](https://axios-http.com/) – Para llamadas al backend
- [Styled Components](https://styled-components.com/) – Estilos CSS-in-JS
- [Stripe](https://stripe.com/es) – Integración de pagos

## 📁 Estructura del proyecto

El frontend está organizado en módulos reutilizables para facilitar la escalabilidad:

src/
├── Assets/ # Imágenes, fuentes, etc.

├── Layout/ # Componentes comunes de diseño (navbar, footer)

├── Pages/ # Vistas principales (Home, Login, ProductDetail, etc.)

├── Routes/ # Definición de rutas públicas y privadas

├── Services/ # Lógica de conexión con el backend 

├── Shared/ # Componentes reutilizables

├── Store/ # Configuración de Redux y slices

├── App.jsx # Componente principal

├── main.jsx # Punto de entrada

├── reset.css # Reset de estilos base

## ⚙️ Funcionalidades implementadas

- Registro e inicio de sesión de usuarios
- Visualización de productos
- Filtros por categoría
- Carrito de compras completo
- Checkout integrado con Stripe
- Comunicación con backend mediante Axios (con `.env`)

## 🌐 Comunicación con el backend

Las llamadas a la API se realizan mediante Axios u Fetch, la URL base está definida en un archivo `.env` y apunta a un servidor local.

## 💳 Stripe (modo prueba)

El checkout está conectado a Stripe (modo sandbox). Para pruebas puedes usar:

Tarjeta: 4242 4242 4242 4242
Fecha: Cualquiera válida (ej. 12/34)
CVC: 123


## 🧪 Cómo ejecutar el proyecto en local

1. Clona el repositorio:
   
git clone https://github.com/MaxDanna26/KmZero_Front

2. Instala dependencias:

npm install

3. Configura la URL del backend en un archivo .env:
en nuestro caso apuntamos al localhost por las pruebas de back
   VITE_BACKEND_URL= http://localhost:3000

4. Inicia el servidor:

npm run dev

🎯 Objetivo del proyecto
Este frontend fue parte del proyecto final del curso de React, cuyo objetivo fue construir una plataforma eCommerce desde cero, utilizando tecnologías modernas tanto en el frontend como en el backend (Node.js + Express + SQL).

Se trata de una app realista, preparada para seguir creciendo e integrar nuevas funcionalidades como panel de administración, reviews, favoritos, etc.

📬 Contacto
¿Tienes preguntas, sugerencias o quieres conectar? ¡Estoy activo en LinkedIn!


