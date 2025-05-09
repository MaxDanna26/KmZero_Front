import styled from "styled-components";
import Router from "./Routes/AppRoutes";
import "./reset.css";

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #fff8e1;
`;
