import React from "react";
import { Redirect } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import "./Main.scss";
import PostList from "./PostList";

function Main() {
  const authenticated = true;
  return (
    <div>
      {authenticated ? (
        <div>
          <Header />
          <div className="main">
            <PostList />
            <About />
          </div>
        </div>
      ) : (
        <Redirect to="/sign-in" />
      )}

      {/* Header
            PostList
            Post
            About
            Footer */}
    </div>
  );
}

export default Main;
