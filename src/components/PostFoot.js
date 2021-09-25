import React from "react";
import "./PostFoot.scss";

import { IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

function PostFoot({likes}) {
  return (
    <div className="postfoot">
      <div className="icons">
        <div>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <ModeCommentOutlinedIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="body">
        <p>{likes} Likes</p>
        <div>
          <span>Username</span>
          <span>Desc</span>
        </div>
        <p>Time</p>
      </div>
    </div>
  );
}

export default PostFoot;
