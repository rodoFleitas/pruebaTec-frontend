import { useState } from "react";

import { useTheme } from "@emotion/react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { getDate, getTime } from "../hooks";
import months from "../../../configs/MONTHS";

const useStyles = (theme) => {
  const styles = {
    titleSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: "16px",
    },
    actionSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    date: {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.customColors.white
          : theme.palette.grey[700],
      paddingRight: theme.spacing(1),
    },
    popover: {
      "& .MuiPopover-paper": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.customColors.lightGrey
            : theme.palette.customColors.white,
        borderRadius: theme.spacing(1.25),
      },

      "& .MuiList-padding": {
        padding: 0,
      },

      "& .MuiSvgIcon-root": {
        color: theme.palette.primary.dark,
      },
    },
    listItem: {
      padding: theme.spacing(0.5, 2),
      color: theme.palette.primary.dark,
    },
  };
  return styles;
};

const TitleComponent = ({ note, isMobile, onClickHandler }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  return (
    <div style={classes.titleSection}>
      <div>
        <Typography variant="body2" sx={classes.title}>
          {note.title !== "" ? note.title : "Sin titulo"}
        </Typography>
      </div>
      <div style={classes.actionSection}>
        {!isMobile && (
          <Typography variant="body2" sx={classes.date}>
            {`Editado el ${getDate(note.updatedAt, months, true)} ${getTime(
              note.updatedAt
            )}`}
          </Typography>
        )}

        <IconButton
          style={{ padding: 8, marginLeft: 4 }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
      <Popover
        style={{ marginTop: 5 }}
        id="popover-actions-comment"
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={classes.popover}
      >
        <div>
          <List component="nav">
            <ListItem
              button
              onClick={() => {
                onClickHandler("editNote", note);
                handleClose();
              }}
              sx={classes.listItem}
            >
              <ListItemIcon>
                <EditIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Editar" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                onClickHandler("deleteNote", note);
                handleClose();
              }}
              sx={classes.listItem}
            >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Eliminar" />
            </ListItem>
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default TitleComponent;
