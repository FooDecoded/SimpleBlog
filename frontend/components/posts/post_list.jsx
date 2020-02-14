import React from "react";
import PostListItem from "./post_list_item";
import Sidebar from "./sidebar";
import { Route } from "react-router-dom";
import CreatePost from "./create_post";
import { AnimatedSwitch } from "react-router-transition";
import { mapStyles, bounceTransition } from "../utils";
import { useEffect } from "react";

export default function PostList({
  posts,
  deletePost,
  createPost,
  signout,
  history,
  updatePost,
  fetchPosts
}) {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div id="layout" className="layout">
      <Sidebar
        signout={() => {
          signout();
          history.push("/");
        }}
      />

      <div className="content">
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <Route
            path="/create"
            render={() => <CreatePost createPost={createPost} />}
          />
          <Route
            path="/list"
            render={() => {
              return (
                <div>
                  <div className="posts">
                    <h1 className="content-header">Your Posts</h1>
                    {posts.map((post, idx) => (
                      <PostListItem
                        key={idx + post.title}
                        post={post}
                        updatePost={updatePost}
                        deletePost={deletePost}
                      />
                    ))}
                  </div>
                </div>
              );
            }}
          />
        </AnimatedSwitch>
      </div>
    </div>
  );
}
