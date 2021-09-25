import { IconButton } from "@material-ui/core";
import React from "react";
import "./About.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import UploadImg from "./UploadImg";

function About() {
  return (

    <div className="about">
      <UploadImg />

    <Link className="links" to="/profile">
      <div className="about__account">
        <IconButton className="picture">
          <AccountCircleIcon fontSize="large" />
        </IconButton>

        <div className="name">
          <p>User Name</p>
          <p>Name</p>
        </div>
      <p className="logOut">Log Out</p>

      </div>

    </Link>
    </div>


  );
}

export default About;
