import { useState } from "react";
import Form from "./Form";

import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";

import { editNote } from "../../Redux/Action/notesActions";

const EditNote = ({ user, current, setOpen }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const onClickHandler = async (data) => {
    setIsLoading(true);

    dispatch(editNote(user, current, data, setOpen, setIsLoading));
  };

  return (
    <Form
      title="Editar Nota"
      Icon={EditIcon}
      setOpen={setOpen}
      hasChanged={hasChanged}
      setHasChanged={setHasChanged}
      onClickHandler={onClickHandler}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      current={current}
    />
  );
};

export default EditNote;
