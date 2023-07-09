// :::::FUNCION PARA AGREGAR NUEVO REGISRO:::::
export const add = (text, data, funcData, funcOpen, funcAlert) => {
  const newArr = [...data];
  if (!text.img || !text.name || !text.lastName || !text.year) {
    funcAlert({ success: false, error: true });
    return;
  }
  newArr.push({
    imagen: text.img,
    nombre: text.name,
    apellido: text.lastName,
    año: text.year,
  });
  funcData(newArr);
  funcAlert({ success: true, error: false });
  funcOpen({ modalAdd: false, modalEdit: false });
};
