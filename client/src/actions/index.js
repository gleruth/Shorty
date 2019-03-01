import axios from "axios";
import { FETCH_LINKS } from "./types";

export const fetchLinks = () => async dispatch => {
  const res = await axios.get("/api/shorten");

  dispatch({ type: FETCH_LINKS, payload: res.data });
};

export const submitLink = values => async dispatch => {
  const res = await axios.post("/api/shorten", values);

  dispatch({ type: FETCH_LINKS, payload: res.data });
};
