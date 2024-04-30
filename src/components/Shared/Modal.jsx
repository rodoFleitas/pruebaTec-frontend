import { useTheme } from "@emotion/react";
import { Modal } from "@mui/material";

const useStyles = (theme) => {
  const styles = {
    modal: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(2),
    },
    paper: {
      position: "absolute",
      minWidth: theme.spacing(37.5),
      maxWidth: theme.spacing(71.5),
      width: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.customColors.modal.darkBg
          : theme.palette.customColors.modal.lightBg,
      padding: theme.spacing(3),
      borderRadius: 6,
      outline: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return styles;
};

export default function CustomModal({ children, open }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  let BackdropProps = {
    invisible: false,
    style: {
      background: `rgba(0, 0, 0, ${theme.palette.type === "dark" ? 0.4 : 0.6})`,
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(4px)",
    },
  };

  return (
    <Modal
      aria-labelledby="CustomModal"
      aria-describedby="CustomModal"
      sx={classes.modal}
      open={open}
      slotProps={{ backdrop: BackdropProps }}
    >
      <div
        style={{
          ...classes.paper,
        }}
      >
        {children}
      </div>
    </Modal>
  );
}
