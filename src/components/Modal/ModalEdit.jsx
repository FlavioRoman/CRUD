// :::::HOOK:::::
import { useContext } from "react";
// ::::LOGICA:::::
import { edit } from "../../logic/edit";
// :::::ESTILOS:::::
import { ButtonAdd, style } from "./utils/style";
// :::::MATERIAL UI:::::
import { Modal, Stack, TextField } from "@mui/material";
// :::::CONTEXTO:::::
import { RegistersContext } from "../../context/useConext";

const ModalEdit = () => {
  const {
    data,
    profile,
    setProfile,
    identifier,
    open: { modalEdit },
    setOpen,
  } = useContext(RegistersContext);
  return (
    <Modal
      open={modalEdit}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => setOpen({ modalAdd: false, modalEdit: false })}
    >
      <Stack direction="column" sx={style} gap="10px">
        <label>Imagen</label>
        <TextField
          required
          id="image"
          label="URL"
          variant="outlined"
          onChange={(event) =>
            setProfile({ ...profile, img: event.target.value })
          }
          value={`${profile.img}`}
        />
        <label>Nombre</label>
        <TextField
          required
          id="name"
          label="Nombre"
          variant="outlined"
          onChange={(event) =>
            setProfile({ ...profile, name: event.target.value })
          }
          value={`${profile.name}`}
        />
        <label>Apellido</label>
        <TextField
          required
          id="lastName"
          label="Apellido"
          variant="outlined"
          onChange={(event) =>
            setProfile({ ...profile, lastName: event.target.value })
          }
          value={`${profile.lastName}`}
        />
        <label>Año</label>
        <TextField
          required
          id="year"
          label="Edad"
          variant="outlined"
          onChange={(event) =>
            setProfile({ ...profile, year: event.target.value })
          }
          value={`${profile.year}`}
        />
        {/* :::::BOTON PARA GUARDAR LOS CAMBIOS::::: */}
        <ButtonAdd
          type="button"
          onClick={() => edit(data, identifier, setProfile, profile, setOpen)}
        >
          GUARDAR
        </ButtonAdd>
      </Stack>
    </Modal>
  );
};

export default ModalEdit;
