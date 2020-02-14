import { connect } from "react-redux";
import { signin } from "../../actions/session_actions";
import SessionForm from "./session_form";

function mapDispatchToProps(dispatch) {
  return {
    processForm: user => dispatch(signin(user))
  };
}

function mapStateToProps(state) {
  return {
    buttonText: "Sign In",
    sessionErrors: state.errors.session
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
