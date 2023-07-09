// :::::FUNCION PARA EDITAR REGISRO:::::
export const edit = (data, id, funcProfile, profile, funcOpen) => {
  const newArr = [...data];
  if (!profile.img || !profile.name || !profile.lastName || !profile.year) {
    return;
  }
  funcProfile((newArr[id].imagen = profile.img));
  funcProfile((newArr[id].nombre = profile.name));
  funcProfile((newArr[id].apellido = profile.lastName));
  funcProfile((newArr[id].año = profile.year));
  funcOpen({ modalAdd: false, modalEdit: false });
};
