import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  REMOVE_POST
} from "../actions/posts_actions";

const initialState = {};

function postsReducer(state = initialState, action) {
  Object.freeze(state);
  let dupedState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST:
      dupedState[action.post.id] = action.post;
      return dupedState;
      break;

    case RECEIVE_POSTS:
      action.posts.forEach(post => {
        dupedState[post.id] = post;
      });
      return dupedState;
      break;

    case REMOVE_POST:
      delete dupedState[action.post.id];
      return dupedState;
      break;

    default:
      return state;
      break;
  }
}

export default postsReducer;
