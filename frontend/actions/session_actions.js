import * as SessionUtils from "../utils/session_api_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: currentUser
  };
}

export function logoutCurrentUser() {
  return {
    type: LOGOUT_CURRENT_USER
  };
}

export function receiveErrors(errors) {
  return {
    type: RECEIVE_ERRORS,
    payload: errors
  };
}

export function signin(user) {
  return function(dispatch) {
    return SessionUtils.signin(user)
      .then(user => {
        dispatch(receiveCurrentUser(user));
      })
      .catch(errors => {
        dispatch(receiveErrors(errors));
      });
  };
}

export function signout() {
  return function(dispatch, getState) {
    return SessionUtils.signout(getState().session.id).then(() =>
      dispatch(logoutCurrentUser())
    );
  };
}

export function signup(user) {
  return function(dispatch) {
    return SessionUtils.signup(user).then(user =>
      dispatch(receiveCurrentUser(user))
    );
  };
}
