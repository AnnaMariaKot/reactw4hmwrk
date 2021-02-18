import React from "react";
import Weathercss from "./Weathercss.css"

export default function Weather() {
  let weatherData = {
    city: "Ghent",
    date: "20/12/2021",
    description: "cloudy",
    temperature: "9",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    humidity: "80",
    wind: "15"
  };

  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Type a city"
          className="city-input"
          autoComplete="off"
        />
        <input type="submit" value="Search" className="button" />
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li className="date">{weatherData.date}</li>
        <li className="description">{weatherData.description}</li>
      </ul>
      <h2>{weatherData.temperature}</h2>
      <p className="units">
        <a href="/">°C</a> | <a href="/"> °F </a>
      </p>
      <img
        src={weatherData.imgUrl}
        alt={weatherData.description}
        className="weather-icon"
      />

      <ul>
        <li className="humidity">Humidity:{weatherData.humidity}%</li>
        <li className="windspeed">Windspeed: {weatherData.wind} km/h</li>
      </ul>
    </div>
  );
}
 