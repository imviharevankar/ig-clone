import React from 'react';
import "./PostGrid.scss";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon  from '@material-ui/icons/ChatBubble';

function PostGrid({ image, likes, comments = 12 }) {
    return (
        <div className="postgrid">
            <img src={image}></img>
            <div>
                <p><FavoriteIcon fontSize="medium" /> {likes}</p>
                <p><ChatBubbleIcon /> {comments}</p>
            </div>
        </div>
    )
}

export default PostGrid
