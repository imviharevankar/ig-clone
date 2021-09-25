import React from 'react';
import "./ProfileCount.scss"

function ProfileCount() {
    return (
        <div className="profilecount">
            <div className="posts">
                <h2>0</h2>
                <p>posts</p>
            </div>
            <div className="followers">
            <h2>0</h2>
                <p>followers</p>
            </div>
            <div className="following">
            <h2>0</h2>
                <p>following</p>
            </div>
            
        </div>
    )
}

export default ProfileCount;
