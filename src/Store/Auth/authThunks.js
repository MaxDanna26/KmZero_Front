import { loginUser } from "../../Services/Auth/loginUser";
import { checkingCredentials, login, logout } from "./authSlice";

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    try {
      const  data  = await loginUser(email, password);
      dispatch(login({ email, password }));

    } catch (error) {
      console.error(error);
      dispatch(logout());
    }
  };
}	