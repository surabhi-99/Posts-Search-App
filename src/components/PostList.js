import React from "react";
const PostList = ({ posts }) => (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

export default PostList;