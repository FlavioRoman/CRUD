// :::::MATERIAL UI:::::
import { Alert, Stack } from "@mui/material";
import { useContext, useEffect } from "react";
import { RegistersContext } from "../context/useConext";

const style = {
  position: "absolute",
  left: 0,
  rigth: 0,
  bottom: 0,
  margin: "10px",
  zIndex: 1400,
};

const Footer = () => {
  const {
    setAlert,
    alert: { success, error },
  } = useContext(RegistersContext);

  useEffect(() => {
    setInterval(() => {
      setAlert({ success: false, error: false });
    }, 3000);
  }, []);

  return (
    <Stack sx={style} spacing={2}>
      {success && <Alert severity="success">REGISTRO GUARDADO</Alert>}
      {error && <Alert severity="error">COMPLETE TODOS LOS CAMPOS</Alert>}
    </Stack>
  );
};

export default Footer;
