import { combineReducers } from "redux";
import { CharacterReducer } from "./reducer_character";

const rootReducer = combineReducers({
  char: CharacterReducer
});

export default rootReducer;
