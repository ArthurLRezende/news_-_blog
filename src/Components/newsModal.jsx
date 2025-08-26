import React from "react";
import demoImg from "../assets/images/demo.jpg";
import './newsModal.css'
import './Modal.css'

const NewsModal = ({ show, article, onClose }) => {
    if (!show) {
        return null
    }
    console.log(show, article)
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                {article && (<><img src={article.image} alt={article.title} className="modal-image" />
                    <h2 className="modal-title">
                        {article.title}
                    </h2>
                    <p className="modal-source">{article.source.name}</p>
                    <p className="modal-date"> {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: "2-digit"
                    })}
                    </p>
                    <p className="modal-content-text">
                        {article.content}
                    </p>
                    <div className="modal-flex">
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read More</a>
                    </div></>
                )}

            </div>
        </div>
    )
}

export default NewsModal;