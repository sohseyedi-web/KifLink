import { createStore, applyMiddleware } from "redux";
import kifReducer from "./reducer/kif-reducer";
import logger from "redux-logger";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(kifReducer, applyMiddleware(...middleware));

export default store;
