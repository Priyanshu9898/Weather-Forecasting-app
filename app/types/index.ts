export interface ForecastSectionProps {
    forecastData: Array<{
      date: string;
      maxTemp: number;
      minTemp: number;
      condition: string;
      icon: string;
    }>;
  }
  