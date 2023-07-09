// :::::TRAER DATOS YA REGISTRADOS:::::
import { datos } from "../components/utils/datos";

// :::::FUNCION PARA EL BUSCARDOR:::::
export const search = (text, func) => {
  const value = text.toLowerCase();
  if (value.length > 0) {
    const result = datos.filter((item) => {
      const nombre = item.nombre.toLowerCase();
      const apellido = item.apellido.toLowerCase();
      return (
        nombre.includes(value) ||
        apellido.includes(value) ||
        item.año.includes(value)
      );
    });
    func(result);
  } else {
    func(datos);
  }
};
