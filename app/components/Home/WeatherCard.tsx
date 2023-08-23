"use client";

import { toastStyle } from "@/utils/toastStyle";
import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import SearchInputBox from "./SearchInputBox";
import { BASE_URL } from "@/utils/API";
import { useLocation } from "@/context/LocationContext";
import Link from "next/link";

import {useRouter} from "next/navigation";

const WeatherCard: FC = () => {

  const router = useRouter()

  const { location ,city, setCity} = useLocation();
  const [initialWeatherData, setInitialData] = useState<any>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [weatherLocation, setWeatherLocation] = useState<any>(null);
  const [unit, setUnit] = useState("C"); // metric for Celsius, imperial for Fahrenheit
  const [loading, setLoading] = useState(false);



  const fetchDataFromLocation = async () => {
    try {
      setLoading(true);
      console.log(
        `${BASE_URL}/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${
          (location.latitude, location.longitude)
        }&aqi=no`
      );
      const response = await axios.get(
        `${BASE_URL}/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location.latitude},${location.longitude}&aqi=no`
      );

      console.log(response.data);
      console.log(response.data.location);
      setCity(response.data.location.name);
      setWeatherData(response.data.current);
      setWeatherLocation(response.data.location);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast.error("Error fetching weather data", { style: toastStyle });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromLocation();
  }, [location]);

  const handleUnitToggle = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  const handleForecastClick = () => {
    router.push('/forecast')
  }
  return (
    <>
      <div className="w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Weather Forecasting App
        </h5>

        <SearchInputBox
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          setLoading={setLoading}
          setWeatherLocation={setWeatherLocation}
        />

        {weatherData && weatherLocation && (
          <div className="bg-white p-6  flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4">
              {weatherLocation.name}
            </h2>
            <div className="flex-col items-center justify-center">
              <img
                src={weatherData.condition.icon}
                alt="Weather icon"
                className="w-20 h-20 mx-auto"
              />

              <p className="text-3xl font-semibold">
                {unit === "C" && (
                  <>
                    {weatherData.temp_c}°{unit}
                  </>
                )}
                {unit === "F" && (
                  <>
                    {weatherData.temp_f}°{unit}
                  </>
                )}
              </p>
            </div>
            <p className="text-lg mt-2">
              Condition: {weatherData.condition.text}
            </p>
            <button
              className="mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleUnitToggle}
            >
              Toggle Unit
            </button>

       
              <button  onClick={handleForecastClick} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                View Forecast
              </button>
   
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
