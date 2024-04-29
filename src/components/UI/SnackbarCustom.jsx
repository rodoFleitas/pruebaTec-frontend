import styled from "@emotion/styled";
import { Alert, Snackbar } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { resetSnackData } from "../../Redux/Action/snackDataActions";

const StyledDiv = styled("div")(({ theme }) => ({
  width: "100%",
  "& > * + *": {
    marginTop: theme.spacing(2),
  },
  "& .MuiSnackbar-anchorOriginBottomCenter": {
    bottom: 80,
  },

  [theme.breakpoints.up("md")]: {
    "& .MuiSnackbar-anchorOriginBottomCenter": {
      bottom: 24,
    },
  },
}));

const CustomSnackbar = () => {
  const dispatch = useDispatch();

  const snackData = useSelector((state) => state.snackData.snackData);

  const handleClose = (_, reason) => {
    let data = {
      open: false,
      message: snackData.message,
      severity: snackData.severity,
    };

    if (reason === "clickaway") {
      return;
    }

    dispatch(resetSnackData(data));
  };

  return (
    <StyledDiv>
      <Snackbar
        anchorOrigin={{
          vertical: snackData.vertical,
          horizontal: snackData.horizontal,
        }}
        open={snackData.open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackData.severity}
          variant="filled"
          elevation={6}
        >
          {snackData.message}
        </Alert>
      </Snackbar>
    </StyledDiv>
  );
};

export default CustomSnackbar;
