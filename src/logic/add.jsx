// :::::FUNCION PARA AGREGAR NUEVO REGISRO:::::
export const add = (text, data, funcData, funcOpen) => {
  const newArr = [...data];
  if (!text.img || !text.name || !text.lastName || !text.year) {
    return;
  }
  newArr.push({
    imagen: text.img,
    nombre: text.name,
    apellido: text.lastName,
    año: text.year,
  });
  funcData(newArr);
  funcOpen({ modalAdd: false, modalEdit: false });
};
