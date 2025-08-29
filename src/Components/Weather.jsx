import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";

const Weather = () =>{

    const api_KeyWeather = import.meta.env.VITE_apiKeyWeather;
    
    const [data, setData] = useState({})

    const searchWeather = async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${api_KeyWeather}`
        const response = axios.get(url)
        console.log(response)
    }   

    return <div className="Weather">
        <div className="search">
            <div className="search-top">
                <i className="fa-solid fa-location-dot"></i>
                <div className="location">Tbilisi</div>
            </div>
            <div className="search-location">
                <input type="text" placeholder="Enter Location"/>
                <i className="fa-solid fa-magnifying-glass" onClick={searchWeather}></i>
            </div>
            <div className="weather-data">
                <i className='bxr  bx-sun'  ></i> 
                <div className="weather-type">Clear</div>
                <div className="temp">
                    28
                </div>
            </div>
        </div>
    </div>
}

export default Weather