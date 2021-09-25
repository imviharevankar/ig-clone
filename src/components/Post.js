import React, { useState } from "react";
import PostBody from "./PostBody";
import PostFoot from "./PostFoot";
import PostHead from "./PostHead";
import PostData from "./PostData";
import "./Post.scss";

import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Post({post}) {

  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };


  return (
    <div onClick={handleClickOpen} className="post">
      <PostHead />
      <PostBody img={post?.img} />
      <PostFoot likes={post?.likes} />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted

        
        // onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <div className="dialog__header">
          <DialogTitle id="alert-dialog-slide-title">Edit Profile</DialogTitle>

          <DialogActions>
            <IconButton onClick={handleClose}>
              <CloseOutlinedIcon fontSize="large" />
            </IconButton>
          </DialogActions>
        </div> */}

        <DialogContent
        style={{
            height: "80vh",
            width: "80vw",
            margin: 0,
            padding: 0,
    }} >
          <PostData img={post?.img} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Post;
