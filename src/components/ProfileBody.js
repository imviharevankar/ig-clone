import React, { useState } from "react";
import "./ProfileBody.scss";
import image from "./../public/img/InstaDefaultPic.jpg";

import { Tabs, Tab, Button } from "@material-ui/core";

import AppsIcon from "@material-ui/icons/Apps";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PostGrid from "./PostGrid";

function ProfileBody() {
  const [value, setValue] = useState(0);

  const [posts, setPosts] = useState(true);
  const [saved, setSaved] = useState(false);

  const myPosts = [
    {
      id: "123",
      title: "Post 1",
      img: image,
      likes: 23

    },

    {
      id: "124",
      title: "Post 1",
      img: image,
      likes: 23

    },
    {
      id: "125",
      title: "Post 1",
      img: image,
      likes: 23

    },
    {
      id: "126",
      title: "Post 1",
      img: image,
      likes: 23
    },
    {
        id: "123",
        title: "Post 1",
        img: image,
        likes: 23
  
      },
  
      {
        id: "124",
        title: "Post 1",
        img: image,
        likes: 23
  
      },
      {
        id: "125",
        title: "Post 1",
        img: image,
        likes: 23
  
      },
      {
        id: "126",
        title: "Post 1",
        img: image,
        likes: 23
      },
  ];
  const savedPosts = [];

  const [selected, setSelected] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showPosts = () => {
    document.getElementById("posts").style.display = "block";
    document.getElementById("saved").style.display = "none";
    document.getElementById("posts-btn").classList.add("selected");
    document.getElementById("saved-btn").classList.remove("selected");
    setPosts(true);
    setSaved(false);
  };

  const showSaved = () => {
    document.getElementById("saved").style.display = "block";
    document.getElementById("posts").style.display = "none";
    document.getElementById("saved-btn").classList.add("selected");
    document.getElementById("posts-btn").classList.remove("selected");

    setSaved(true);
    setPosts(false);
  };

  return (
    <div>
      <div className="profilebody">
        <Button
          id="posts-btn"
          className="selected"
          onClick={showPosts}
          variant="contained"
          size="large"
          startIcon={<AppsIcon />}
          variant={posts ? "contained" : "outlined"}
        >
          Posts
        </Button>
        <Button
          id="saved-btn"
          className=""
          onClick={showSaved}
          variant={saved ? "contained" : "outlined"}
          size="large"
          startIcon={<BookmarkBorderIcon />}
        >
          Saved
        </Button>
      </div>

      <div className="p" id="posts">
        {myPosts.map((post) => {
          return (
            <PostGrid
              title={post.title}
              image={post.img}
              likes={post.likes}
              comments="22"
            />
          );
        })}
      </div>

      <div className="posts" id="saved">
        {myPosts.map((post) => {
          return (
            <PostGrid
              title={post.title}
              image={post.img}
              likes="23"
              comments="22"
            />
          );
        })}
      </div>

    </div>
  );
}

export default ProfileBody;
