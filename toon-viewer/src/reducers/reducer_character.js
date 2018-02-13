import {
  FETCH_CHAR
} from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CHAR:
      return action.payload.data;
  }
  return state;
}