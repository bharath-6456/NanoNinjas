import React, { useEffect, useState } from "react";
import axios from "axios";

function GetCrops({ city, temp }) {
  const [suitableCrops, setSuitableCrops] = useState([]);
  const [unsuitableCrops, setUnsuitableCrops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Fetch data from Gemini API
        const response = await axios.get(
          `YOUR_GEMINI_API_ENDPOINT?city=${city}&temperature=${temp}`
        );

        // Assuming the API returns an object with suitable and unsuitable crops
        const { suitable, unsuitable } = response.data;

        setSuitableCrops(suitable);
        setUnsuitableCrops(unsuitable);
      } catch (error) {
        console.error("Error fetching crop data:", error);
        setError("Failed to fetch crop data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city, temp]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Suitable Crops</h2>
      <table>
        <thead>
          <tr>
            <th>Crop Name</th>
          </tr>
        </thead>
        <tbody>
          {suitableCrops.map((crop, index) => (
            <tr key={index}>
              <td>{crop}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Unsuitable Crops</h2>
      <table>
        <thead>
          <tr>
            <th>Crop Name</th>
          </tr>
        </thead>
        <tbody>
          {unsuitableCrops.map((crop, index) => (
            <tr key={index}>
              <td>{crop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetCrops;
