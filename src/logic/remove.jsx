// :::::FUNCION PARA ELIMINAR REGISRO:::::
export const remove = (data, index, func) => {
  const newArr = [...data];
  newArr.splice(index, 1);
  func(newArr);
};
