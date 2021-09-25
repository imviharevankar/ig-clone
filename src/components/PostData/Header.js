import React from 'react';
import "./Header.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from '@material-ui/core';


function Header() {
    return (
        <Link to="/profile" className=" link pd__header">
            <AccountCircleIcon />
            <p>Username</p>
            
        </Link>
    )
}

export default Header
