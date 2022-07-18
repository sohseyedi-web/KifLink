import { combineReducers } from "redux";
import kifReducer from "./kif-reducer";

const rootReducer = combineReducers({
  kif: kifReducer,
});

export default rootReducer;
