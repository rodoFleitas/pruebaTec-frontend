import { CircularProgress } from "@mui/material";

const Spinner = ({ height }) => {
  const classes = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      height: height || 283,
    },
  };

  return (
    <div style={classes.container}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
