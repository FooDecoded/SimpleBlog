let posts = {
  129: [
    {
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body:
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      id: 7,
      title: "magnam facilis autem",
      body:
        "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body:
        "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body:
        "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    }
  ],
  120: [
    {
      body: "120 first post",
      title: "120 first title"
    }
  ],
  17: [
    {
      body: "17 first post",
      title: "17 first title"
    }
  ]
};

let users = [
  { username: "testuser", password: "test", id: "129" },
  { username: "alaa", password: "123456", id: "120" },
  { username: "esraa", password: "123456", id: "17" }
];

let sessions = {};

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
