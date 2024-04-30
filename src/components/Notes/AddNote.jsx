import { useState } from "react";
import Form from "./Form";

import PostAddIcon from "@mui/icons-material/PostAdd";
import { useDispatch } from "react-redux";

import { postNote } from "../../Redux/Action/notesActions";

const AddNote = ({ setOpen, user }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = async (data) => {
    setIsLoading(true);

    dispatch(postNote(user, data, setOpen, setIsLoading));
  };

  return (
    <Form
      title={"Crear Nota"}
      Icon={PostAddIcon}
      setOpen={setOpen}
      hasChanged={true}
      onClickHandler={onClickHandler}
      isLoading={isLoading}
    />
  );
};

export default AddNote;
