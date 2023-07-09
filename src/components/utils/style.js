import { styled } from "@mui/material";

// :::::ESTILO PARA EL CONTENEDOR DEL BUSCADOR:::::
export const BoxSearch = styled("div")({
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  marginBottom: "20px",
});

// :::::ESTILO PARA EL BUSCADOR:::::
export const InputSearch = styled("input")({
  width: "100%",
  height: "100%",
  padding: "0 20px",
  fontSize: "1rem",
  fontWeight: "500",
  borderRadius: "5px",
  fontFamily: "'Poppins', sans-serif",
});

// :::::ESTILO PARA EL BOTON AGREGAR NUEVO REGISTRO:::::
export const ButtonAdd = styled("button")({
  height: "100%",
  fontWeight: 700,
  fontSize: "2rem",
  padding: "0 20px",
  backgroundColor: "#D8315B",
  color: "#FFFAFF",
});

// :::::ESTILO PARA LAS CARDS:::::
export const CardProfile = styled("div")({
  maxWidth: 345,
  transition: "0.3s",
  borderRadius: "20px",
  // borderLeft: "3px solid #ddd",
  // borderBottom: "3px solid #ddd",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  ":hover": {
    // borderLeft: "3px solid #b0b0b0",
    // borderBottom: "3px solid #b0b0b0",
    // transform: "scale(1.1)",
    zIndex: "10",
  },
});

// :::::ESTILO PARA LAS IMAGENES DE LAS CARDS:::::
export const CardImage = styled("img")({
  width: "100%",
  height: "350px",
  objectFit: "cover",
  transition: "0.3s",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  opacity: 0.8,
  ":hover": {
    opacity: 1,
  },
});

// :::::ESTILO PARA EL CONTENEDOR LOS BOTONES EN LAS CARDS:::::
export const CardOptions = styled("div")({
  background: "#ddd",
  borderEndEndRadius: "16px",
  borderEndStartRadius: "16px",
});

// :::::ESTILO PARA EL BOTON EDITAR DE LAS CARDS:::::
export const ButtonEdit = styled("button")({
  width: "100%",
  padding: "10px",
  transition: "0.3s",
  borderEndStartRadius: "16px",
  color: "#fff",
  backgroundColor: "#1E1B18",
});

// :::::ESTILO PARA EL BOTON ELIMINAR DE LAS CARDS:::::
export const ButtonRemove = styled("button")({
  width: "100%",
  padding: "10px",
  transition: "0.3s",
  borderEndEndRadius: "16px",
  color: "#fff",
  backgroundColor: "#D8315B",
});
