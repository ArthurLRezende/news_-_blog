import React from "react";
import './Modal.css'
import './bookmarks.css'
import demoImg from '../assets/images/demo.jpg'

const Bookmarks = () => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <h2 className="bookmarks-heading">Bookmarked News</h2>
                <div className="bookmarks-list">
                    <div className="bookmark-item">
                        <img src={demoImg} alt="BookMark Image" />
                        <h3>Lorem iupsum dolor sit bla bka bka ba</h3>
                        <span className="delete-button">
                            <i className="fa-regular fa-circle-xmark"></i>
                        </span>
                    </div>
                    <div className="bookmark-item">
                        <img src={demoImg} alt="BookMark Image" />
                        <h3>Lorem iupsum dolor sit bla bka bka ba aaaaaaaaa lal al a al l al lalla al al skknskn</h3>
                        <span className="delete-button">
                            <i className="fa-regular fa-circle-xmark"></i>
                        </span>
                    </div>
                    <div className="bookmark-item">
                        <img src={demoImg} alt="BookMark Image" />
                        <h3>Lorem iupsum dolor sit bla bka bka ba</h3>
                        <span className="delete-button">
                            <i className="fa-regular fa-circle-xmark"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookmarks
