import React from 'react';
import "./CommentBox.scss"

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, TextField } from "@material-ui/core";

function CommentBox() {
    return (
        <div className="pd__footer_commentbox">
          <AccountCircleIcon  />
        <TextField fullWidth  placeholder="post" variant="standard" />
        <Button style={{ textTransform: "none"}}>Post</Button>
            
        </div>
    )
}

export default CommentBox
