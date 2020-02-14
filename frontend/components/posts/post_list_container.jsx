import PostList from "./post_list";
import { connect } from "react-redux";
import { allPosts } from "../../reducers/selectors";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost
} from "../../actions/posts_actions";
import { signout } from "../../actions/session_actions";

const mapStateToProps = state => ({
  posts: allPosts(state),
  sessionId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: post => dispatch(createPost(post)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
