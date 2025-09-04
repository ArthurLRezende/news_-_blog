import React from "react";
import image from "../assets/images/user.jpg"
import "./Blogs.css"

const Blogs = () => {
    return(
        <div className="blogs">
            <div className="blogs-left">
                <img src={image} alt="" />
            </div>
            <div className="blogs-right">
                <button className="blogs-close-btn">Back<i className="bx bx-chevron-right"></i></button>
                <button className="post-btn">Create Post</button>
            </div>
        </div>
    )
}

export default Blogs