'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import {motion} from "framer-motion"
import Link from 'next/link';
const MotionLink =motion(Link);

export default function CityDetailPage() {
  const { city: encodedCity } = useParams();
  const city = decodeURIComponent(encodedCity);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API}`
        );
        setWeather(res.data);
      } catch (error) {
        console.error('Error fetching detail:', error);
      }
    };

    fetchDetail();
  }, [city]);

  return (
    <><MotionLink
      href="/dashboard"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-800 transition duration-300 px-6 py-3 rounded-xl text-white font-medium shadow-lg"
    >
      🚀Go to Dashboard
    </MotionLink><div className="min-h-screen p-6 bg-gray-900 text-white">
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
      </div></>
  );
}
