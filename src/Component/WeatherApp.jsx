import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Weather.css'; // Importing the CSS file

const WeatherApp = () => {

      const navigate = useNavigate();
                
      const handleNavigation = () => {
        navigate('/reactpro');
      };

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            console.log(`Fetching weather for: ${city}`);
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa85025657bd641f0da961d07ef6bca3&units=metric`);
            console.log('API response:', response.data);
            setWeather(response.data);
            setError('');
        } catch (err) {
            console.error('Error fetching weather:', err);
            setError('City not found !');
            setWeather(null);
        }
    };

    return (
        <div className="weather-container">
              <div className="bg-animation">
          <div id="stars"></div>
        </div>
        <div className="logo">
          <img src="./assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
        </div>
        <i className="bi bi-arrow-left" onClick={handleNavigation}></i>

            <h1 className="title">Weather App</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="input"
                />
                <button onClick={fetchWeather} className="button">Get Weather</button>
            </div>
            {error && <p className="error">{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h2 className="city-name">{weather.name}</h2>
                    <p className="temperature">{weather.main.temp} °C</p>
                    <p className="description">{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
