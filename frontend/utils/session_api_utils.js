import { signinBackend, signoutBackend, signupBackend } from "./fake_backend";

export function signin(user) {
  return signinBackend(user);
}

export function signup(user) {
  return signupBackend(user);
}

export function signout(sessionId) {
  return signoutBackend(sessionId);
}
