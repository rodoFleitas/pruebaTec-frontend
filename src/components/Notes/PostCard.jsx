import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Card, CardContent, CardHeader } from "@mui/material";

import months from "../../configs/MONTHS";
import { getDate, getTime } from "./hooks";

import TitleComponent from "./PostCardComponents/TitleComponent";
import PostContent from "./PostCardComponents/PostContent";

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.customColors.darkCard
      : theme.palette.customColors.white,
  width: "90%",
  marginBottom: theme.spacing(3),
  padding: theme.spacing(3, 2.25, 2.25, 2.25),
  borderRadius: theme.spacing(2),

  "& .MuiCardContent-root": {
    padding: 0,
  },

  "& .MuiCardHeader-root": {
    padding: theme.spacing(0, 0, 2, 0.75),
  },

  "& .MuiCardActions-root": {
    padding: theme.spacing(0),
  },

  [theme.breakpoints.down("716")]: {
    width: "100%",
  },
}));

const PostCard = ({ isMobile, note, onClickHandler }) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardHeader
        title={
          <TitleComponent
            note={note}
            isMobile={isMobile}
            onClickHandler={onClickHandler}
          />
        }
        subheader={
          isMobile
            ? `${getDate(note.updatedAt, months, true)} ${getTime(
                note.updatedAt
              )}`
            : null
        }
      />
      <CardContent
        sx={{
          padding: theme.spacing(0, 0, 1.25, 0),
        }}
      >
        <PostContent note={note} />
      </CardContent>
    </StyledCard>
  );
};

export default PostCard;
