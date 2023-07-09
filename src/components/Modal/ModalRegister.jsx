// :::::HOOK:::::
import { useContext } from "react";
// ::::LOGICA:::::
import { add } from "../../logic/add";
// :::::ESTILOS:::::
import { ButtonAdd, style } from "./utils/style";
// :::::MATERIAL UI:::::
import { Modal, Stack, TextField } from "@mui/material";
// :::::CONTEXTO:::::
import { RegistersContext } from "../../context/useConext";

const ModalRegister = () => {
  const {
    data,
    setData,
    profile,
    setProfile,
    open: { modalAdd },
    setOpen,
  } = useContext(RegistersContext);
  return (
    <Modal
      open={modalAdd}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => setOpen({ modalAdd: false, modalEdit: false })}
    >
      <Stack direction="column" sx={style} gap="10px">
        <label>Imagen</label>
        <TextField
          label="URL"
          variant="outlined"
          id="outlined-basic"
          value={`${profile.img}`}
          onChange={(event) =>
            setProfile({ ...profile, img: event.target.value })
          }
        />
        <label>Nombre</label>
        <TextField
          label="Nombre"
          variant="outlined"
          id="outlined-basic"
          value={`${profile.name}`}
          onChange={(event) =>
            setProfile({ ...profile, name: event.target.value })
          }
        />
        <label>Apellido</label>
        <TextField
          label="Apellido"
          variant="outlined"
          id="outlined-basic"
          value={`${profile.lastName}`}
          onChange={(event) =>
            setProfile({ ...profile, lastName: event.target.value })
          }
        />
        <label>Año</label>
        <TextField
          label="Edad"
          variant="outlined"
          id="outlined-basic"
          value={`${profile.year}`}
          onChange={(event) =>
            setProfile({ ...profile, year: event.target.value })
          }
        />
        {/* :::::BOTON PARA AGREGAR NUEVO REGISTRO::::: */}
        <ButtonAdd onClick={() => add(profile, data, setData, setOpen)}>
          AGREGAR
        </ButtonAdd>
      </Stack>
    </Modal>
  );
};

export default ModalRegister;
