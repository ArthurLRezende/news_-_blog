import React, { use, useState } from "react";
import "./Weather.css"
import axios from "axios";

const Weather = () => {

    const api_KeyWeather = import.meta.env.VITE_apiKeyWeather;

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const searchWeather = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_KeyWeather}`
            const response = await axios.get(url)
            setData(response.data)
            setLocation('')
            console.log(response.data)
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log("Cidade não encontrada.")
                setData({ notFound: true }); // Adiciona uma propriedade para indicar o erro
            } else {
                console.log("Ocorreu um erro:", error);
            }
        }
    }

    const handleInputChange = (e) => {
        setLocation(e.target.value)
    }

    const getWeatherIcon = (weatherType) => {

        switch (weatherType) {
            case "Clear":
            case "clear":
                return <i className="bx bxs-sun"></i>
            case "Clouds":
            case "clouds":    
                return <i className="bx bxs-cloud"></i>
            case "Rain":
            case "rain":
                return <i className="bx bxs-cloud-rain"></i>
            case "Thunderstorm":
            case "thunderstorm":
                return <i className="bx bxs-cloud-lightning"></i>
            case "Snow":
            case "snow":
                return <i className="bx bxs-cloud-snow"></i>
            case "Haze":
            case "haze":
            case "Mist":
            case "mist":
                return <i className="bx bxs-cloud"></i>
            default:
                return <i className="bx bxs-cloud"></i>
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            searchWeather()
        }
    }

    return <div className="Weather">
        <div className="search">
            <div className="search-top">
                <i className="fa-solid fa-location-dot"></i>
                <div className="location">{data.name}</div>
            </div>
            <div className="search-location">
                <input type="text" placeholder="Enter Location" onKeyDown={handleKeyDown} value={location} onChange={handleInputChange} />
                <i className="fa-solid fa-magnifying-glass" onClick={searchWeather}></i>
            </div>
            {data.notFound ? (
                <div>Not Found :/ </div>
            ) : (
                <div className="weather-data">
                    {data.weather && data.weather[0] && getWeatherIcon(data.weather[0].main)}
                    <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
                    <div className="temp">
                        {data.main ? `${Math.floor(data.main.temp)}*` : null}
                    </div>
                </div>)}
        </div>
    </div>
}

export default Weather