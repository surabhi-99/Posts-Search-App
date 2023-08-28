import React, { useState, useEffect } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import FilterButton from "./FilterButton";
import PostList from "./PostList";

const PostSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  }, []);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFilterPosts = () => {
    const filtered = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredPosts(filtered);
  };

  return (
    <div className="container-md">
      <div className="row justify-content-center">
        <div className="mb-3 col-6">
          <TextInput value={searchText} onChange={handleSearchTextChange} />
        </div>
        <div className="mb-3 col-3">
          <FilterButton onClick={handleFilterPosts} />
        </div>
      </div>
      <div className="row g-4 justify-content-around m-4">
        <PostList posts={filteredPosts} />
      </div>
    </div>
  );
};
export default PostSearch;
