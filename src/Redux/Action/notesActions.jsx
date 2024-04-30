import { GET_NOTES, POST_NOTE, EDIT_NOTE, DELETE_NOTE } from "./actionTypes";

import axios from "axios";
import { setSnackData } from "./snackDataActions";

export const getNotes = (user, setIsLoading) => (dispatch) => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/notes`, {
      headers: {
        Authorization: user.token,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_NOTES,
        payload: res.data.reverse(),
      });

      console.log(res.data)

      if (setIsLoading) setIsLoading(false);
    })
    .catch((err) => {
      if (err.response) {
        dispatch(
          setSnackData({
            open: true,
            message: err.response.data.message,
            severity: "error",
          })
        );
      }
      if (setIsLoading) setIsLoading(false);
    });
};

export const postNote =
  (user, formData, setOpen, setIsLoading) => (dispatch, getState) => {
    let notesAux = getState().notes.notes;
    let notes = Array.from(notesAux);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/notes`, formData, {
        headers: {
          Authorization: user.token,
        },
      })
      .then((res) => {
        let note = res.data;

        notes.unshift(note);

        dispatch({
          type: POST_NOTE,
          payload: notes,
        });

        dispatch(
          setSnackData({
            open: true,
            message: "Nota creada",
            severity: "success",
          })
        );

        if (setOpen) setOpen(false);
      })
      .catch((err) => {
        if (err.response) {
          dispatch(
            setSnackData({
              open: true,
              message: err.response.data.message,
              severity: "error",
            })
          );
        }
        if (setIsLoading) setIsLoading(false);
      });
  };

export const editNote =
  (user, current, formData, setOpen, setIsLoading) => (dispatch, getState) => {
    let notesAux = getState().notes.notes;
    let notes = Array.from(notesAux);

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/notes/${current._id}`,
        formData,
        {
          headers: {
            Authorization: user.token,
          },
        }
      )
      .then((res) => {
        let i = notes.findIndex((note) => {
          if (note._id === current._id) {
            return true;
          }
          return false;
        });

        if (i !== -1) {
          notes[i] = Object.assign(notes[i], res.data);
        }

        dispatch({
          type: EDIT_NOTE,
          payload: notes,
        });

        dispatch(
          setSnackData({
            open: true,
            message: "Nota editada",
            severity: "success",
          })
        );

        if (setOpen) setOpen(false);
      })
      .catch((err) => {
        if (err.response) {
          dispatch(
            setSnackData({
              open: true,
              message: err.response.data.message,
              severity: "error",
            })
          );
        }
        if (setIsLoading) setIsLoading(false);
      });
  };

export const deleteNote =
  (user, id, setOpen, setIsLoading) => (dispatch, getState) => {
    let notesAux = getState().notes.notes;
    let notes = Array.from(notesAux);

    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/notes/${id}`, {
        headers: {
          Authorization: user.token,
        },
      })
      .then(() => {
        let i = notes.findIndex((note) => {
          if (note._id === id) {
            return true;
          }
          return false;
        });

        i !== -1 && notes.splice(i, 1);

        dispatch({
          type: DELETE_NOTE,
          payload: notes,
        });

        dispatch(
          setSnackData({
            open: true,
            message: "Nota eliminada",
            severity: "success",
          })
        );

        if (setOpen) setOpen(false);
      })
      .catch((err) => {
        if (err.response) {
          dispatch(
            setSnackData({
              open: true,
              message: err.response.data.message,
              severity: "error",
            })
          );
        }
        if (setIsLoading) setIsLoading(false);
      });
  };
