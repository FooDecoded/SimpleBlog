import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

function configureStore(state) {
  return createStore(rootReducer, (state = {}), applyMiddleware(thunk, logger));
}

export default configureStore;
