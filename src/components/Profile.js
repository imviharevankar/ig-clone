import React from 'react';
import ProfileHead from './ProfileHead';
import "./Profile.scss"
import Header from './Header';
import ProfileCount from './ProfileCount';
import ProfileBody from './ProfileBody';

function Profile() {
    return (
        <div>
            <Header />
        <div  className="profile">
        <ProfileHead />
        <ProfileCount />
        <ProfileBody />

        </div>
            profile head
            profile count
            tabs
            UserPosts
            SavedPosts
        </div>
    )
}

export default Profile
