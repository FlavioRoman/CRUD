// :::::HOOK:::::
import { useContext } from "react";
// :::::LOGICA:::::
import { openAdd } from "../logic/open";
import { search } from "../logic/search";
// :::::CONTEXTO:::::
import { RegistersContext } from "../context/useConext";
// :::::ICONO:::::
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// :::::ESTILOS:::::
import { BoxSearch, ButtonAdd, InputSearch } from "./utils/style";

const Search = () => {
  const { setData, setOpen, setProfile } = useContext(RegistersContext);
  return (
    <BoxSearch>
      {/* :::::CAMPO PARA BUSCAR::::: */}
      <InputSearch
        id="search"
        placeholder="Buscar"
        onChange={(event) => search(event.target.value, setData)}
      />
      {/* :::::BOTON PARA CREAR UN NUEVO REGISTRO::::: */}
      <ButtonAdd onClick={() => openAdd(setOpen, setProfile)}>
        <AddOutlinedIcon />
      </ButtonAdd>
    </BoxSearch>
  );
};

export default Search;
