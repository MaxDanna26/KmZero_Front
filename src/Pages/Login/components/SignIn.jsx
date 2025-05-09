import { useEffect, useState } from "react";
import logo from "../../../Assets/KmZero.png";
import { useDispatch } from "react-redux";
import { startLoginWithEmailPassword } from "../../../Store/Auth/authThunks";
import { Container, Fondo, InputCarne, LoginLink, Logo, SignInButton, StyledSpan, Title } from "../styles";
import propTypes from 'prop-types'

const SignIn = ({ changeToFather }) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => { }, []);

  const handleLogIn = () => {
    dispatch(startLoginWithEmailPassword(email, password));
  };

  return (
    <>
      <Fondo>
        <Logo src={logo} alt="" />
        <Container>
          <Title>Accede a tu cuenta</Title>
          <InputCarne
            type="text"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputCarne
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignInButton onClick={handleLogIn}>Sign In</SignInButton>
          <LoginLink>
            ¿No tienes una cuenta? Créate una{" "}
            <StyledSpan onClick={changeToFather}> aquí mismo!</StyledSpan>
          </LoginLink>
        </Container>
      </Fondo>
    </>
  );
};

export default SignIn;

SignIn.propTypes = {
  changeToFather: propTypes.func,
}

