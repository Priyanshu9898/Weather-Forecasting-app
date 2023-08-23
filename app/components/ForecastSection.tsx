import React from "react";
import { ForecastSectionProps } from "@/types";

const ForecastSection: React.FC<ForecastSectionProps> = ({ forecastData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {forecastData.map((day, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-1">{day.date}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Max Temp:</p>
              <p className="text-xl font-semibold">{day.maxTemp}°C</p>
            </div>
            <div>
              <p className="text-gray-600">Min Temp:</p>
              <p className="text-xl font-semibold">{day.minTemp}°C</p>
            </div>
          </div>
          <p className="mt-2 text-gray-600">Condition: {day.condition}</p>
          <img src={day.icon} alt="Weather icon" className="mt-4 w-16 h-16 mx-auto" />
        </div>
      ))}
    </div>
  );
};

export default ForecastSection;

