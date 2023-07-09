// :::::HOOKS:::::
import { createContext, useEffect, useState } from "react";
// :::::IMPORTAR DATOS:::::
import { datos } from "../components/utils/datos";

// :::::CREAR EL CONTEXTO:::::
export const RegistersContext = createContext();

// :::::PROVEER EL CONTEXTO:::::
export const RegistersProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [identifier, setIdentifier] = useState();
  const [open, setOpen] = useState({ modalAdd: false, modalEdit: false });
  const [profile, setProfile] = useState({
    img: "",
    name: "",
    lastName: "",
    year: "",
  });

  useEffect(() => {
    setData(datos);
  }, []);

  return (
    <RegistersContext.Provider
      value={{
        data,
        setData,
        open,
        setOpen,
        profile,
        setProfile,
        identifier,
        setIdentifier,
      }}
    >
      {children}
    </RegistersContext.Provider>
  );
};
