import { combineReducers } from "redux";
import postsReducer from "./posts_reducer";
import sessionReducer from "./session_reducer";
import errors_reducer from "./errors_reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  session: sessionReducer,
  errors: errors_reducer
});

export default rootReducer;
