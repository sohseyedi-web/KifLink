import { combineReducers } from "redux";
import kifReducer from "./kif-reducer";
import formReducer from "./form-reducer";

const rootReducer = combineReducers({
  kif: kifReducer,
  form: formReducer,
});

export default rootReducer;
