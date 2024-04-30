export const getTime = (date) => {
  let aux = new Date(date);
  let hour = aux.getHours().toString();
  let minutes = aux.getMinutes().toString();

  return `${hour.length < 2 ? "0" + hour : hour}:${
    minutes.length < 2 ? "0" + minutes : minutes
  } hs`;
};

export const getDate = (date, months, shortDate) => {
  let aux = new Date(date);
  let month = aux.getMonth();
  let day = aux.getDate();

  if (!shortDate) {
    return `${day} de ${months[month]}`;
  } else {
    return `${day}/${month + 1}/${aux.getFullYear()}`;
  }
};

export const onChangeData = (setHasChanged, hasChanged) => {
  if (setHasChanged && hasChanged === false) {
    setHasChanged(true);
  }
};

export const onClickHandler = (
  action,
  current,
  setCurrent,
  setAction,
  setOpen
) => {
  if (current) setCurrent(current);

  setAction(action);
  setOpen(true);
};
