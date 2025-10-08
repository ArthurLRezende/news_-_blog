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
                {/*<button className="post-btn">Create Post</button> */}
                <div className="blogs-right-form">
                    <h1>New Post</h1>
                    <form>
                        <div className="img-upload">
                            <label htmlFor="file-upload" className="file-upload">
                                <i class='bxr  bx-file-plus'  ></i>  Upload Image
                            </label>
                        </div>
                        <input type="text" 
                        placeholder="Add Title (Max 60 Characters)" 
                        className="title-input"/>
                        <textarea className="text-input" placeholder="Add Text"></textarea>
                        <button type="submit" className="submit-btn">Submit button</button>
                    </form>
                </div>
                <button className="blogs-close-btn">Back<i className="bx bx-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Blogs