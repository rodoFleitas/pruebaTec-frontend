import { Fragment } from "react";

import AddNote from "./AddNote";
import EditNote from "./EditNote";
import DeleteComponent from "../Shared/DeleteComponent";

const NotesActions = ({ user, setOpen, action, current, deleteNote }) => {
  return (
    <Fragment>
      {action === "addNote" && <AddNote user={user} setOpen={setOpen} />}

      {action === "editNote" && (
        <EditNote user={user} setOpen={setOpen} current={current} />
      )}

      {action === "deleteNote" && (
        <DeleteComponent
          title="Eliminar nota"
          onClickHandler={deleteNote}
          setOpen={setOpen}
        />
      )}
    </Fragment>
  );
};

export default NotesActions;
