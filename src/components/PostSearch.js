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
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  }, []);

  const handleSearchTextChange = (event) => {setSearchText(event.target.value)};
  const handleFilterPosts = () => {
    const filtered = posts.filter(post =>{
        post.title.toLowerCase().includes(searchText.toLowerCase())
    });
    setFilteredPosts(filtered);
  };

  return (
    <div>
        <TextInput value = {searchText} onChange={handleSearchTextChange}/>
        <FilterButton onClick = {handleFilterPosts}/>
        <PostList posts={filteredPosts}/>
    </div>
  );
};
export default PostSearch;
