import React from 'react';
import "./PostData.scss";
import Photo from './PostData/Photo';
import Header from './PostData/Header';
import Body from './PostData/Body';
import Footer from './PostData/Footer';




function PostData({img}) {
    return (
        <div className="postdata">
            <Photo img={img} />
            <Header />
            <Body />
            <Footer />
            {/* <PostDataHeader />
            <PostDataBody />
            <PostDataFooter /> */}

            {/* 
                photo
                header
                comments
                icons
                comment
            */}
        </div>
    )
}

export default PostData
