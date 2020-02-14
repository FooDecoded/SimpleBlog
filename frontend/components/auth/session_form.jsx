import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showError: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    if (
      this.state.username.trim().length == 0 ||
      this.state.password.length < 4
    ) {
      this.setState({ showError: true });
      return;
    }
    e.preventDefault();
    this.props
      .processForm(Object.assign({}, this.state))
      .then(() => this.props.history.push("/list"))
      .catch(() => console.log("some error"));
  }

  render() {
    return (
      <div className="auth-container">
        <form className="auth-form">
          <h1 className="auth-form-header">{this.props.buttonText}</h1>
          <div className="auth-input-container">
            <input
              placeholder="Username"
              className="auth-input"
              type="text"
              onChange={this.handleInput("username")}
            />
            <span className="underline"></span>
          </div>
          <div className="auth-input-container">
            <input
              placeholder="Password"
              className="auth-input"
              type="password"
              onChange={this.handleInput("password")}
            />
            <span className="underline"></span>
          </div>
          <div className="session-errors">
            {this.props.sessionErrors.map(errorText => (
              <span className="form-error">{errorText}</span>
            ))}
            {this.state.showError && (
              <span className="form-error">
                Username can't be empty and password can't be less than 4
                characters
              </span>
            )}
          </div>
          <button className="auth-btn" onClick={this.handleSubmit}>
            {this.props.buttonText}
          </button>
        </form>
      </div>
    );
  }
}
