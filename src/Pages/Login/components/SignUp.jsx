import { useState } from "react";
import NavBar from "../../../Shared/Components/NavBar/NavBar";
import { createUser } from "../../../Services/Users/createUser";
import { CloseButton, Container, Fondo, InputCarne, LoginLink, Modal, ModalContent, ModalHeader, ModalText, SignUpButton, StyledSpan, TermsText, Title } from '../styles.js'
import proptypes from 'prop-types'
import { SignUpContainer } from '../styles';

const SignUp = ({ changeToFather }) => {
  const [client, setClient] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(null);

  const openModal = (type) => {
    setShowModal(type);
  };

  const handleSubmit = () => {
    if (client.password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    } else {
      createUser(client);
    }
    // Añadir lógica para enviar los datos al backend
    changeToFather();
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <>
      <Fondo>
        <NavBar showSearch={false} />

        <SignUpContainer>
          <Title>Registrate</Title>
          <InputCarne
            type="text"
            placeholder="Username"
            value={client.userName}
            onChange={(e) => setClient({ ...client, userName: e.target.value })}
          />
          <InputCarne
            type="text"
            placeholder="Correo electrónico"
            value={client.email}
            onChange={(e) => setClient({ ...client, email: e.target.value })}
          />
          <InputCarne
            type="password"
            placeholder="Contraseña"
            value={client.password}
            onChange={(e) => setClient({ ...client, password: e.target.value })}
          />
          <InputCarne
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <TermsText>
            Al registrarte aceptas los{" "}
            <StyledSpan onClick={() => openModal("terms")}>
              términos y condiciones
            </StyledSpan>
          </TermsText>
          <TermsText>
            Al registrarte aceptas la{" "}
            <StyledSpan onClick={() => openModal("privacy")}>
              política de privacidad
            </StyledSpan>
          </TermsText>
          <TermsText>
            Al registrarte aceptas la{" "}
            <StyledSpan onClick={() => openModal("cookies")}>
              política de cookies
            </StyledSpan>
          </TermsText>

          <LoginLink>
            ¿Ya tienes cuenta?{" "}
            <StyledSpan onClick={changeToFather}>Log In</StyledSpan>
          </LoginLink>

          <SignUpButton onClick={handleSubmit}>Sign Up</SignUpButton>
        </SignUpContainer>

        { }
        {showModal && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <CloseButton onClick={closeModal}>Cerrar</CloseButton>
              </ModalHeader>
              {showModal === "terms" && (
                <ModalText>
                  <h2>Términos y Condiciones</h2>
                  <p>
                    1. Uso del Servicio: Al registrarte en la plataforma,
                    confirmas que tienes al menos 18 años de edad y que toda la
                    información proporcionada es verídica. El servicio está
                    destinado únicamente para uso personal y no comercial.
                  </p>
                  <p>
                    2. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                  <p>
                    3. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                  <p>
                    4. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                </ModalText>
              )}
              {showModal === "privacy" && (
                <ModalText>
                  <h2>Política de Privacidad</h2>
                  <p>
                    1. Uso del Servicio: Al registrarte en la plataforma,
                    confirmas que tienes al menos 18 años de edad y que toda la
                    información proporcionada es verídica. El servicio está
                    destinado únicamente para uso personal y no comercial.
                  </p>
                  <p>
                    2. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                  <p>
                    3. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                  <p>
                    4. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                </ModalText>
              )}
              {showModal === "cookies" && (
                <ModalText>
                  <h2>Política de Cookies</h2>
                  <p>
                    1. Uso del Servicio: Al registrarte en la plataforma,
                    confirmas que tienes al menos 18 años de edad y que toda la
                    información proporcionada es verídica. El servicio está
                    destinado únicamente para uso personal y no comercial.
                  </p>
                  <p>
                    2. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                  <p>
                    3. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                  <p>
                    4. Creación de Eventos: Los usuarios pueden crear eventos de
                    quedadas para comer hamburguesas. Estos eventos deben
                    cumplir con las normas comunitarias, y no se permite la
                    promoción de actividades ilegales o peligrosas.
                  </p>
                </ModalText>
              )}
            </ModalContent>
          </Modal>
        )}
      </Fondo>
    </>
  );
};

export default SignUp;

SignUp.propTypes = {
  changeToFather: proptypes.func
}
