import React from "react";

const PostList = ({ posts }) => (
  <>
    {posts.map((post) => (
      <div key={post.id} className="card col-4" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    ))}
  </>
);

export default PostList;
