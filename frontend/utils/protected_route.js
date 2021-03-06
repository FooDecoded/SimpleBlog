import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

function ProtectedRoute({ loggedIn, path, component: Component, exact }) {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
