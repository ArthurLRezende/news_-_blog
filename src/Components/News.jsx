import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import "./News.css";
import profileimg from "../assets/images/user.jpg"
import noImage from "../assets/images/no-img.png"
import axios from "axios"
import NewsModal from "./newsModal"

const News = () => {

    const api_key = import.meta.env.VITE_apiKey;

    const categories = ["general", "world", "business", "technology", "entertainment", "sports", "science", "health", "nation"]

    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("general")
    const [searchInput, setSearchInput] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [showModal, setShowModal] = useState(null)
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        const fetchNews = async () => {
            let url = 'https://gnews.io/api/v4/top-headlines?category=' + selectedCategory + '&lang=en&apikey=' + api_key

            if (searchQuery) {
                url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&max=5&apikey=${api_key}`
            }

            const response = await axios.get(url)
            console.log(url)
            const fetchedNews = response.data.articles

            setHeadline(fetchedNews[0])
            console.log(fetchedNews[0])
            setNews(fetchedNews.slice(1, 7))

        }

        fetchNews()
    }, [selectedCategory, searchQuery])

    const handleCategoryClick = (e, category) => {
        e.preventDefault()
        setSearchQuery('')
        setSelectedCategory(category)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(searchInput)
        setSearchInput('')
    }

    const handleModal = (article) =>  {
        setSelectedArticle(article)
        setShowModal(true)
    }

    return <div className="news">
        <header className="news-header">
            <h1 className="logo">News & Blogs</h1>
            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input type="text" value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value)
                        }} placeholder="Search News ..." />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </header>
        <div className="news-content">
            <div className="navbar">
                <div className="user">
                    <img src={profileimg} alt="" />
                    <p>Mary's Blog</p>
                </div>
                <div className="categories">
                    <h1 className="nav-header">Categories</h1>
                    <div className="nav-links">
                        {categories.map((category) => (
                            <a href="#" key={category} onClick={(e) => {
                                handleCategoryClick(e, category)
                            }} className="nav-link">{category}</a>
                        ))}
                        <a href="" className="nav-link">Bookmarks <i className="fa-regular fa-bookmark"></i></a>
                    </div>
                </div>
            </div>
            <div className="news-section">
                {headline && (
                    <div className="headline" onClick={()=>{
                        handleModal(headline)
                    }}>
                        <img src={headline.image} alt={headline.title} />
                        <h2 className="headline-title">{headline.title}<i className="fa-regular fa-bookmark bookmark"></i></h2>
                    </div>
                )}
                <div className="news-grid">
                    {news && (news.map((article, index) => (
                        <div key={index} className="news-grid-item" onClick={()=>{handleModal(article)}}>
                            {article.image ? <img src={article.image} alt={article.title} /> :
                                <img src={noImage} alt={article.title} />}

                            <h3>{article.title}<i className="fa-regular fa-bookmark bookmark"></i> </h3>
                        </div>
                    )))}
                </div>
                 <NewsModal show={showModal} article={selectedArticle} onClose={() => {setShowModal(false)}}/>
            </div>
            <div className="my-blogs">My blogs</div>
            <div className="Weather-Calendar">
                <Weather />
                <Calendar />
            </div>
        </div>
        <div className="news-footer">footer</div>
    </div>
}

export default News