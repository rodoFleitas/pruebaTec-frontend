import { Fragment } from "react";

import { Typography } from "@mui/material";

import styled from "@emotion/styled";

const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "container" && prop !== "comment",
})(({ theme, container, comment }) => ({
  ...(container && {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: theme.spacing(0, 0.75),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }),

  ...(comment && {
    paddingLeft: theme.spacing(3),
    borderLeft: "3px solid",
    borderColor: theme.palette.customColors.lightGrey,

    [theme.breakpoints.down("sm")]: {
      border: "none",
      padding: 0,
    },
  }),
}));

const PostContent = ({ note }) => {
  return (
    <Fragment>
      <StyledDiv container={true}>
        <StyledDiv comment={true}>
          <Typography variant="body2" component="p">
            {note.note}
          </Typography>
        </StyledDiv>
      </StyledDiv>
    </Fragment>
  );
};

export default PostContent;
