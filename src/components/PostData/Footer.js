import React from 'react';
import CommentBox from './CommentBox';
import "./Footer.scss"
import IconBox from './IconBox';

function Footer() {
    return (
        <div className="pd__footer">
            <IconBox />
            <CommentBox />
        </div>
    )
}

export default Footer
