import React from "react";
import PostForm from "./post_form";

export default function createPost({ createPost }) {
  return <PostForm handleSubmit={post => createPost(post)} />;
}
