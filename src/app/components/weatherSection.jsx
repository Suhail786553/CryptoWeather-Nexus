'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/slices/weatherSlice';
import { toggleFavoriteCity } from '../redux/slices/weatherSlice';
import Link from 'next/link';

export default function WeatherSection() {
    const dispatch = useDispatch();
    const { data, loading, error,favorites } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    return (
        <div className="bg-blue-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-white">🌤️ Weather Overview</h3>

            {loading ? (
                <p className="text-white">Loading...</p>
            ) : error ? (
                <p className="text-red-400">Error: {error}</p>
            ) : (
                <div className="space-y-4">
                    {data.map((city, index) => (
                        <><Link key={index} href={`/weather/${city.name.toLowerCase()}`}>
                            <div className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg cursor-pointer transition duration-200 mb-4">
                                <h4 className="text-xl font-semibold text-black">{city.name}</h4>
                                <p className=" text-sm text-black">
                                    🌡️ {city.temp}°C | 💧 {city.humidity}% | {city.condition}
                                </p>
                            </div>

                        </Link><button
                            onClick={() => dispatch(toggleFavoriteCity(city.name))}
                            className="text-yellow-400 text-2xl ml-4"
                            title="Toggle Favorite"
                        >
                                {favorites.includes(city.name) ? '★' : '☆'}
                            </button></>
                    ))}
                </div>
                
            )}
            
        </div>
    );
}
