import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import App from "./components/app";

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<App store={window.store} />, root);
});

// Add cancel to forms
// check for form data . display errors if empty
// refactor
////////////////////////////////////////////////////////
// logout
// fix the post form
// errors on the login page accumale in a bade way need to fix margin
