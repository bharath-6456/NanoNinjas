import React, { useState } from "react";
import axios from "axios"; // If using Axios

function Weather() {
  const [city, setCity] = useState("Hyderabad");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "0b16fb72321601b931fb77f803aad640"; // Replace with your actual API key

  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      setWeatherData(response.data);
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
          <h4 className="text-white">
            {Math.round(weatherData.main.temp - 273)} C,{" "}
            {weatherData.weather[0].main}
          </h4>
          {/* Add more weather data as needed */}
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Weather;
