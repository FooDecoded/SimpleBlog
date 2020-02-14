import { users, posts, sessions } from "./dumby_data";

export function createPostBackend(post, sessionId) {
  return new Promise((resolve, reject) => {
    // debugger;
    if (sessions[sessionId]) {
      setTimeout(() => {
        let postId = uniqueId();
        posts[sessions[sessionId]].push({ ...post, id: postId });
        resolve(post);
      }, 500);
    } else {
      reject("cant create the post for some reason");
    }
  });
}

export function updatePostBackend(updatedPost, sessionId) {
  return new Promise((resolve, reject) => {
    if (sessions[sessionId]) {
      setTimeout(() => {
        posts[sessions[sessionId]] = posts[sessions[sessionId]].map(post => {
          if (post.id == updatedPost.id) {
            return updatedPost;
          } else {
            return post;
          }
        });
        resolve(updatedPost);
      }, 500);
    } else {
      reject("cant update the post for some reason");
    }
  });
}

export function deletePostBackend(deletedPost, sessionId) {
  return new Promise((resolve, reject) => {
    if (sessions[sessionId]) {
      setTimeout(() => {
        posts[sessions[sessionId]] = posts[sessions[sessionId]].filter(
          post => post.id !== deletedPost
        );
        resolve(deletedPost);
      }, 500);
    } else {
      reject("cant update the post for some reason");
    }
  });
}

export function signinBackend(postedUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = users.reduce((acc, user) => {
        if (
          postedUser.username.toLowerCase() == user.username &&
          postedUser.password == user.password
        ) {
          return user;
        } else {
          return acc;
        }
      }, null);
      if (user) {
        let sessionId = uniqueId();
        sessions[sessionId] = user.id;
        resolve(sessionId);
      } else {
        reject(["cant sign in try again"]);
      }
    }, 500);
  });
}

export function signupBackend(postedUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // make sure he is not signuped yet
      if (
        users.filter(user => user.username == postedUser.username.toLowerCase())
          .length != 0
      ) {
        reject("already in stupid");
      } else {
        let userId = uniqueId();
        users.push({
          username: postedUser.username.toLowerCase(),
          password: postedUser.password,
          id: userId
        });
        let sessionId = uniqueId();
        sessions[sessionId] = userId;
        resolve(sessionId);
      }
    }, 500);
  });
}

export function signoutBackend(sessionId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      delete sessions[sessionId];
      resolve("signed out");
    }, 500);
  });
}

function uniqueId() {
  return new Date().getTime();
}

export function fetchPostsBackend(sessionId) {
  return new Promise((resolve, reject) => {
    if (sessions[sessionId]) {
      setTimeout(() => {
        resolve(posts[sessions[sessionId]]);
      }, 500);
    } else {
      reject("Login first");
    }
  });
}
