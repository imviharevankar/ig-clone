import React from 'react';
import image from "./../../public/img/InstaDefaultPic.jpg"
import "./Photo.scss";

function Photo({img}) {
    return (
        <div className="pd__photo">
            <img src={img} alt="photo" />
        </div>
    )
}

export default Photo;
