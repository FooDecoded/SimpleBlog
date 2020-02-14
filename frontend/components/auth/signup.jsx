import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

function mapDispatchToProps(dispatch) {
  return {
    processForm: user => dispatch(signup(user))
  };
}

function mapStateToProps(state) {
  return {
    buttonText: "Sign Up",
    sessionErrors: state.errors.session
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
