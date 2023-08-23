"use client";

import ForecastSection from '@/app/components/ForecastSection';
import { useLocation } from '@/context/LocationContext';
import { BASE_URL } from '@/utils/API';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const ForecastPage = () => {
  const {city, setCity} = useLocation();
  const [forecastData, setForecastData] = useState([]);
 
  console.log("city", city);

  useEffect(() => {
    if (city) {
      fetchForecastData(city);
    }
  }, [city]);

  const fetchForecastData = async (cityName: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${cityName}&days=3`
      );

      console.log(response.data, "forecast");
      const forecast = response.data.forecast.forecastday.map((day: any) => ({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
      }));
      setForecastData(forecast);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-4">3 Days Forecast for {city}</h1>
      <ForecastSection forecastData={forecastData} />
    </div>
  )
}

export default ForecastPage