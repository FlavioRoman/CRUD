// :::::HOOKS:::::
import { createContext, useState } from "react";
// :::::IMPORTAR DATOS:::::
import { datos } from "../components/utils/datos";

// :::::CREAR EL CONTEXTO:::::
export const RegistersContext = createContext();

// :::::PROVEER EL CONTEXTO:::::
export const RegistersProvider = ({ children }) => {
  const [data, setData] = useState(datos);
  const [identifier, setIdentifier] = useState();
  const [alert, setAlert] = useState({ success: false, error: false });
  const [open, setOpen] = useState({ modalAdd: false, modalEdit: false });
  const [profile, setProfile] = useState({
    img: "",
    name: "",
    lastName: "",
    year: "",
  });

  return (
    <RegistersContext.Provider
      value={{
        data,
        setData,
        open,
        setOpen,
        profile,
        setProfile,
        alert,
        setAlert,
        identifier,
        setIdentifier,
      }}
    >
      {children}
    </RegistersContext.Provider>
  );
};
