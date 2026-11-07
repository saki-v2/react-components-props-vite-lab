import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

export default function App() {
  return (
    <div className="App">
      <Header name={props.blogData.name} />
      <About image={props.blogData.image} about={props.blogData.about} />
      <ArticleList posts={props.blogData.posts} />
    </div>
  );
}
