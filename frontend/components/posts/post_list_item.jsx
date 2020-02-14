import React from "react";
import PostForm from "../posts/post_form";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      showEditForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(post) {
    this.props
      .updatePost(post)
      .then(() => this.setState({ showEditForm: false }));
  }

  handleCancel() {
    this.setState({ showEditForm: false });
  }

  render() {
    let { post, deletePost } = this.props;
    return (
      <section className="post">
        {!this.state.showEditForm && (
          <div>
            <header className="post-header">
              <h2 className="post-title">{post.title}</h2>
            </header>
            <p className="post-description">{post.body}</p>
          </div>
        )}

        {this.state.showEditForm ? (
          <PostForm
            handleSubmit={this.handleSubmit}
            post={post}
            handleCancel={this.handleCancel}
          />
        ) : (
          <div className="edit-btns">
            <span
              className="btn primary-btn"
              onClick={() =>
                this.setState({ showEditForm: !this.state.showEditForm })
              }
            >
              Edit Post
            </span>
            <span className="btn delete-btn" onClick={() => deletePost(post)}>
              Delete
            </span>
          </div>
        )}
      </section>
    );
  }
}
