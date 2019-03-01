import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import linksReducer from "./linksReducer";

export default combineReducers({
  form: reduxForm,
  links: linksReducer
});
