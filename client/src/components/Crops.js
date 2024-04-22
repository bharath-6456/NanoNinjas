import React, { useState } from "react";
import axios from "axios";
import GetCrops from "../components/GetCrops.js";

function City() {
  const [city, setCity] = useState("Hyderabad");
  const [temp, setTemp] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "0b16fb72321601b931fb77f803aad640";

  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      setWeatherData(response.data);
      setTemp(response.data.main.temp);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {!weatherData ? (
        <form onSubmit={handleSearch}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Hyderabad weather"}
          </button>
        </form>
      ) : (
        <div>
          <GetCrops temp={temp} city={city} />
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default City;
