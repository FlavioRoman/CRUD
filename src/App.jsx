// :::::ESTILO:::::
import "./App.css";
// :::::MATERIAL UI:::::
import { Container } from "@mui/material";
// :::::COMPONENTES:::::
import Search from "./components/Search";
import Profile from "./components/Profile";
import ModalEdit from "./components/Modal/ModalEdit";
import ModalRegister from "./components/Modal/ModalRegister";

function App() {
  return (
    <Container>
      <Search />
      <Profile />
      <ModalRegister />
      <ModalEdit />
    </Container>
  );
}

export default App;
