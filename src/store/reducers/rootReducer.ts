import { combineReducers } from "redux";
import analyticsReducer from "./analyticsReducer";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
  analytics: analyticsReducer,
  player: playerReducer,
});

export default rootReducer;
