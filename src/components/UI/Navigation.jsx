import { Fragment, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../Redux/Action/userActions";

import EditNoteIcon from "@mui/icons-material/EditNote";

const useStyles = (theme) => {
  const styles = {
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: theme.palette.primary.dark,
      padding: "8px 24px",
    },
    avatar: {
      width: 50,
      height: 50,
    },
    addBtn: {
      textTransform: "capitalize",
      borderRadius: 50,
      padding: "8px 12px",
      color: theme.palette.customColors.white,
      border: "1px solid",
      borderColor: theme.palette.customColors.white,
      backgroundColor: theme.palette.primary.dark,

      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        border: "none",
      },
    },
  };
  return styles;
};

const Navigation = ({ user, setOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    handleCloseUserMenu();
    dispatch(logOutUser());
  };

  return (
    <Fragment>
      <AppBar position="fixed" color="default">
        <Toolbar style={classes.toolbar}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={classes.avatar}
                  alt={user.userData.name}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={logout}>
                <Typography textAlign="center">Cerrar sesión</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Button
            sx={classes.addBtn}
            variant="contained"
            startIcon={<EditNoteIcon />}
            onClick={() => setOpen(true)}
          >
            Nueva nota
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};

export default Navigation;
