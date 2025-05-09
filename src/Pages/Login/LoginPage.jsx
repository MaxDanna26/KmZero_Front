import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useState } from "react";

const LoginPage = () => {
  const [logIn, setLogIn] = useState(true);
  const handlerChangeToFather = () => {
    setLogIn(!logIn);
  };

  return (
    <>
      {logIn ? (
        <SignIn changeToFather={handlerChangeToFather} />
      ) : (
        <SignUp changeToFather={handlerChangeToFather} />
      )}
    </>
  );
};

export default LoginPage;
