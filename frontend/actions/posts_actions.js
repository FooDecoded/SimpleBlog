import * as APIUtil from "../utils/posts_api_utils";
import { receiveErrors } from "./error_actions";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post
  };
}

export function removePost(post) {
  return {
    type: REMOVE_POST,
    post
  };
}

export function fetchPosts() {
  return (dispatch, getState) => {
    return APIUtil.fetchPosts(getState().session.id).then(posts => {
      dispatch(receivePosts(posts));
    });
  };
}

export function createPost(post) {
  return (dispatch, getState) => {
    return APIUtil.createPost(post, getState().session.id).then(
      receievedPost => dispatch(receivePost(receievedPost)),
      err => {
        return dispatch(receiveErrors(err));
      }
    );
  };
}

export function updatePost(post) {
  return (dispatch, getState) => {
    return APIUtil.updatePost(post, getState().session.id).then(
      receievedPost => dispatch(receivePost(receievedPost)),
      err => {
        return dispatch(receiveErrors(err));
      }
    );
  };
}

export function deletePost(post) {
  return (dispatch, getState) => {
    return APIUtil.deletePost(post, getState().session.id).then(
      receievedPost => dispatch(removePost(receievedPost)),
      err => {
        return dispatch(receiveErrors(err));
      }
    );
  };
}
