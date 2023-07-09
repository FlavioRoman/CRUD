// :::::ESTILO:::::
import {
  CardImage,
  ButtonEdit,
  CardOptions,
  CardProfile,
  ButtonRemove,
} from "./utils/style";
// :::::HOOK:::::
import { useContext } from "react";
// :::::LOGICA:::::
import { remove } from "../logic/remove";
import { openEdit } from "../logic/open";
// :::::MATERIAL UI:::::
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
// :::::ICONO:::::
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// :::::CONTEXTO:::::
import { RegistersContext } from "../context/useConext";

const Profile = () => {
  const { data, setOpen, setData, setProfile, setIdentifier } =
    useContext(RegistersContext);
  return (
    <Stack
      flexWrap="wrap"
      alignItems="flex-start"
      justifyContent="center"
      direction="row"
      gap="20px"
    >
      {/* :::::DATOS DEL PERFIL::::: */}
      {data?.map((value, index) => {
        return (
          <CardProfile key={index}>
            <CardImage src={`${value.imagen}`} />
            <CardContent sx={{ padding: "20px" }}>
              <Typography textAlign="center" fontFamily="'Poppins', sans-serif">
                Nombre
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontFamily="'Poppins', sans-serif"
                textAlign="center"
              >
                {value.nombre} {value.apellido}
              </Typography>
              <Typography textAlign="center" fontFamily="'Poppins', sans-serif">
                EDAD
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontFamily="'Poppins', sans-serif"
                textAlign="center"
              >
                {value.año}
              </Typography>
              <Typography
                variant="body2"
                fontSize="1rem"
                fontWeight="500"
                color="text.secondary"
                fontFamily="'Poppins', sans-serif"
                textAlign="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            {/* :::::OPCIONES DE PERFIL::::: */}
            <CardOptions sx={{ padding: "0px" }}>
              <Stack width="100%" direction="row">
                {/* :::::BOTON EDITAR::::: */}
                <ButtonEdit
                  onClick={() =>
                    openEdit(data, index, setOpen, setProfile, setIdentifier)
                  }
                >
                  <EditIcon />
                </ButtonEdit>
                {/* :::::BOTON ELIMINAR::::: */}
                <ButtonRemove onClick={() => remove(data, index, setData)}>
                  <DeleteIcon />
                </ButtonRemove>
              </Stack>
            </CardOptions>
          </CardProfile>
        );
      })}
    </Stack>
  );
};

export default Profile;
