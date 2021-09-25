import React from "react";
import "./PostHead.scss"
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function PostHead() {
  return (
    <div className="posthead">
      <IconButton>
        <AccountCircleIcon />
      </IconButton>

      <h4>UserName</h4>
    </div>
  );
}

export default PostHead;
