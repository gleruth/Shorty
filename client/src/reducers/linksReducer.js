import { FETCH_LINKS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LINKS:
      return action.payload;
    default:
      return state;
  }
}
