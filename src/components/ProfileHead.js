import React from "react";
import "./ProfileHead.scss";

import { Button } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function ProfileHead() {
  return (
    <div className="profilehead">
      <div className="profile__pic">
        <AccountCircleIcon style={{ fontSize: "10rem" }} />
      </div>
      <div className="profile__info">
        <p>UserName</p>
        <h6>Account Name</h6>
        
          <p>Bio</p>
          <p>Bio</p>
          <p>Bio</p>
          <p>Bio</p>
          <p>Bio</p>
          <p>Bio</p>
        
      </div>

      <div className="profile__btns">
          <Button
          variant="contained"
          endIcon={<EditIcon />}
          size="small">
              Edit Profile
          </Button>
          <Button variant="contained"
          endIcon={<ExitToAppIcon />}
          size="small"
          >
              Log Out
          </Button>
      </div>
    </div>
  );
}

export default ProfileHead;
