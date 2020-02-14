import {
  createPostBackend,
  fetchPostsBackend,
  updatePostBackend,
  deletePostBackend
} from "./fake_backend";

export function fetchPosts(sessionId) {
  return fetchPostsBackend(sessionId);
}

export function createPost(post, sessionId) {
  return createPostBackend(post, sessionId);
}

export function updatePost(post, sessionId) {
  return updatePostBackend(post, sessionId);
}

export function deletePost(post, sessionId) {
  return deletePostBackend(post, sessionId);
}
