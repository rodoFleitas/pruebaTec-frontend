import { Fragment } from "react";
import PostCard from "./PostCard";

const Notes = ({ user, notes, isMobile }) => {
  return (
    <Fragment>
      {notes.map((entry) => (
        <PostCard
          key={entry._id}
          user={user}
          isMobile={isMobile}
          note={entry}
        />
      ))}
    </Fragment>
  );
};

export default Notes;
