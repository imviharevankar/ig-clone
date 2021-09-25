import React from "react";
import "./Header.scss";

import SendIcon from "@material-ui/icons/Send";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import {
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">Social Media</div>
      <div className="search">
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            type="search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
      </div>
      <div className="icons">
        <IconButton>
          <SendIcon />
        </IconButton>
        <Link to="/profile">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Header;
