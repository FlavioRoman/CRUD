// :::::FUNCIONES PARA ABRIR LOS MODALS:::::
export const openAdd = (funcOpen, funcProfile) => {
  funcOpen((state) => ({ ...state, modalAdd: true }));
  funcProfile({ img: "", name: "", lastName: "", year: "" });
};

export const openEdit = (
  data,
  index,
  funcOpen,
  funcProfile,
  funcIdentifier
) => {
  const newArr = [...data];
  funcIdentifier(index);
  funcOpen((state) => ({ ...state, modalEdit: true }));
  funcProfile((state) => ({ ...state, img: newArr[index].imagen }));
  funcProfile((state) => ({ ...state, name: newArr[index].nombre }));
  funcProfile((state) => ({ ...state, lastName: newArr[index].apellido }));
  funcProfile((state) => ({ ...state, year: newArr[index].año }));
};
