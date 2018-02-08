import { FETCH_CHAR } from "../actions/index";

export const CharacterReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_CHAR:
      return action.payload;
  }
  return state;
};
