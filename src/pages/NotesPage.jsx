import { useEffect, useState } from "react";

import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";

import { getNotes } from "../Redux/Action/notesActions";
import Spinner from "../components/UI/Spinner";
import Notes from "../components/Notes/Notes";

const NotesPage = ({ user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const notes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    dispatch(getNotes(user, setIsLoading));
  }, [dispatch, user]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiCard-root": {
          overflow: "visible",
        },
        marginTop: 3,
      }}
      style={{
        padding: 0,
        height: isLoading ? "100%" : "unset",
      }}
      maxWidth="xl"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Notes user={user} notes={notes} isMobile={isMobile} />
      )}
    </Container>
  );
};

export default NotesPage;
