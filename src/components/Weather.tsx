"use client";
import { useEffect, useState } from "react";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Weather = () => {
  const apiKey = "ae5251217d2593800dfc8853bfd4bb9d";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  function getWeather() {
    fetch(`${apiUrl}London,uk&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getWeather();
  }, []);

  const [city, setCity] = useState();
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    setTemp(data.main.temp);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    const weather = document.getElementById("weather")
    weather?.classList.remove("hidden");
  };

  return (
    <div
      style={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
      className="rounded-md text-white p-2 mx-4"
    >
      <div className="flex items-center justify-center">
        <input
          id="city"
          type="text"
          className="w-64 p-2 text-[#333] rounded-md"
          placeholder="Enter City Name"
          value={city}
          onChange={(e: any) => setCity(e.target.value)}
        />
        <FiSearch
          onClick={handleSubmit}
          style={{
            scale: 2,
          }}
          className="w-10"
        />
      </div>
      <div id="weather" className="flex flex-col justify-center items-center hidden">
        <h1 className="text-[69px]">{temp} ℃</h1>
        <h1 className="text-[50px]">Temperature</h1>
        <div className="flex items-center justify-center text-center gap-20 mt-10">
          <div>
            <p className="text-[29.7px]">{humidity} %</p>
            <p>Humidity</p>
          </div>
          <div>
            <p className="text-[29.7px]">{wind} km/h</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
