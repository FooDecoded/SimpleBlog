import React from "react";
import { withRouter } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post ? this.props.post.title : "",
      body: this.props.post ? this.props.post.body : "",
      showError: false
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
      showError: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.title.trim() == "" || this.state.body.trim() == "") {
      this.setState({ showError: true });
      return;
    }

    if (this.props.post) {
      this.props.handleSubmit({ ...this.state, id: this.props.post.id });
    } else {
      this.props
        .handleSubmit({ ...this.state, id: this.uniqueId() })
        .then(() => {
          this.props.history.push("/list");
        });
    }
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
    return (
      <div>
        <h1 className="content-header">Create a Post</h1>
        <p className="router-animation-quickfix">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          inventore eligendi, delectus fugiat nostrum error saepe facilis alias
          earum adipisci, voluptas magni sint praesentium quo quis quasi sequi
          veniam quod.
        </p>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <div>
            Title
            <input
              className="post-form__text"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleFormChange}
            />
          </div>
          <div>
            Body
            <textarea
              className="post-form__textarea"
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleFormChange}
            />
          </div>
          <input
            className="post-form__submit btn primary-btn"
            type="submit"
            value="Submit"
          />

          {this.state.showError && (
            <span className="form-error">Title and body can't be empty</span>
          )}

          {this.props.post && (
            <span className="btn delete-btn" onClick={this.props.handleCancel}>
              Cancel
            </span>
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
