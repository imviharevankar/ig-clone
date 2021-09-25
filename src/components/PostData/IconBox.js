import { BookmarkOutlined, FavoriteOutlined, MessageOutlined } from '@material-ui/icons'
import React from 'react';
import "./IconBox.scss";

function IconBox() {
    return (
        <div className="pd__footer_iconbox">
            <div >

            <FavoriteOutlined className="icons" fontSize="large" />
            <MessageOutlined className="icons"
            fontSize="large"/>
            </div>

            <BookmarkOutlined className="icons" fontSize="large" />
        </div>
    )
}

export default IconBox
