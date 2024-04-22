import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const MAX_TOKENS = 150; // Adjust as needed

function GetCrops({ city, temp }) {
  const genAI = new GoogleGenerativeAI('AIzaSyDzkoyl8p3hDfsV1CzWyCyNGj4_cvNTo-k');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const [suitableCrops, setSuitableCrops] = useState([]);
  const [unsuitableCrops, setUnsuitableCrops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Construct the prompt for the OpenAI API
        const prompt = `Give 5 suitable and 3 non suitable crops for ${city} at temperature ${temp}`;

        const response = await axios.post(
          "https://api.openai.com/v1/completions",
          {
            model: "text-davinci-003", // Replace with a suitable model (e.g., text-davinci-003)
            prompt: prompt,
            max_tokens: MAX_TOKENS,
            temperature: 0.7, // Adjust temperature for creativity vs. factuality
            top_p: 1, // Adjust for probability vs. sampling
          },
          {
            headers: {
              Authorization: `Bearer YOUR_OPENAI_API_KEY_HERE`, // Replace with your OpenAI API key
            },
          }
        );

        // Parse the response to extract crop information
        const crops = response.data.choices[0].text.split("\n").slice(1); // Skip first line (potentially prompt repetition)
        const suitable = crops.slice(0, 5);
        const unsuitable = crops.slice(5);

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
