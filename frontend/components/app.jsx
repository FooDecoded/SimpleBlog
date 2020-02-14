import React from "react";
import { Provider } from "react-redux";
import PostListContainer from "./posts/post_list_container";
import SignupForm from "./auth/signup";
import SigninForm from "./auth/signin";
import ProtectedRoute from "../utils/protected_route";
import AuthRoute from "../utils/auth_route";
import { HashRouter, Switch } from "react-router-dom";

export default function App(props) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <AuthRoute path="/login" component={SigninForm} />
          <AuthRoute path="/signup" component={SignupForm} />
          <ProtectedRoute path="/" component={PostListContainer} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}
