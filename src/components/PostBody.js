import React from 'react'
import image from "../public/img/InstaDefaultPic.jpg"
import "./PostBody.scss"

function PostBody({img}) {
    return (
        <div className="postbody">
            <img src={img} />
        </div>
    )
}

export default PostBody
