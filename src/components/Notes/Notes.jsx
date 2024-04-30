import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import PostCard from "./PostCard";
import CustomModal from "../Shared/Modal";
import NotesActions from "./NotesActions";
import { deleteNote } from "../../Redux/Action/notesActions";
import { onClickHandler } from "./hooks";

const Notes = ({ user, notes, isMobile }) => {
  const dispatch = useDispatch();

  const [current, setCurrent] = useState(null);
  const [action, setAction] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {notes.map((entry) => (
        <PostCard
          key={entry._id}
          isMobile={isMobile}
          note={entry}
          onClickHandler={(action, current) =>
            onClickHandler(action, current, setCurrent, setAction, setOpen)
          }
        />
      ))}

      <CustomModal open={open}>
        <NotesActions
          user={user}
          setOpen={setOpen}
          action={action}
          current={current}
          deleteNote={(setIsLoadingComponent) => {
            setIsLoadingComponent(true);
            dispatch(
              deleteNote(user, current._id, setOpen, setIsLoadingComponent)
            );
          }}
        />
      </CustomModal>
    </Fragment>
  );
};

export default Notes;
