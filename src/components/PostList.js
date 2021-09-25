import React, { useState } from 'react';
import Post from './Post';
import "./PostList.scss"

import { connect } from "react-redux";
 

function PostList({ posts }) {

    return (
        <div className="postlist">
            {
                posts &&

                posts.map(post => {
                    return(
                    <Post key={post.id} post={post} />

                    )
                })
            }
           
           

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.post.posts);
    return {
        posts: state.post.posts
    }

}

export default connect(mapStateToProps)(PostList);
