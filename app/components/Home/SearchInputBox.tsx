"use client";

import { BASE_URL } from "@/utils/API";
import React, { FC, useState } from "react";
import axios from "axios";
import { toastStyle } from "@/utils/toastStyle";
import { toast } from "react-hot-toast";
import { useLocation } from "@/context/LocationContext";

const SearchInputBox: FC<{
  weatherData: any;
  setWeatherData(arg: any): void;
  setLoading(arg: boolean): void;
  setWeatherLocation(arg: any): void;
}> = ({ weatherData, setWeatherData, setLoading, setWeatherLocation }) => {
  const { city, setCity } = useLocation();

  const fetchWeather = async () => {
    try {
      setLoading(true);
      console.log(
        `${BASE_URL}/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&aqi=no`
      );
      const response = await axios.get(
        `${BASE_URL}/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&aqi=no`
      );

      console.log(response.data.current);
      console.log(response.data.location);
      setWeatherData(response.data.current);
      setWeatherLocation(response.data.location);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast.error("Error fetching weather data", { style: toastStyle });
      setLoading(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchWeather();
  };

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };

  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit}>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            name="search"
            onChange={handleChange}
            value={city}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter City name"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInputBox;
