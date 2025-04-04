'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

export default function CityDetailPage() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`
        );
        setWeather(res.data);
      } catch (error) {
        console.error('Error fetching detail:', error);
      }
    };

    fetchDetail();
  }, [city]);

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 capitalize">{city} - Detailed Weather</h2>

      {!weather ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg space-y-3">
          <p><strong>🌡️ Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>💧 Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>🌬️ Wind Speed:</strong> {weather.wind.speed} m/s</p>
          <p><strong>☁️ Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>🕒 Timezone:</strong> GMT {weather.timezone / 3600 >= 0 ? '+' : ''}{weather.timezone / 3600}</p>
        </div>
      )}
    </div>
  );
}
