"use client";
import { useSelector } from "react-redux";
 
export default function FavoriteSection(){
    const { data: weatherData, favorites: favoriteCities } = useSelector(state => state.weather);
    const { data: cryptoData, favorites: favoriteCryptos } = useSelector(state => state.crypto);

    const favoriteWeather = weatherData.filter(city => favoriteCities.includes(city.name));
    const favoriteCrypto = cryptoData.filter(coin => favoriteCryptos.includes(coin.name));
return(
<div className="space-y-8">
            <div className="bg-blue-800 p-4 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-white mb-3">🌤️ Favorite Weather Cities</h3>
                {favoriteWeather.length === 0 ? (
                    <p className="text-black">No favorite cities yet.</p>
                ) : (
                    favoriteWeather.map(city => (
                        <div key={city.name} className="bg-white bg-opacity-10 p-3 rounded-md text-black mb-2">
                            <h4 className="text-lg font-semibold">{city.name}</h4>
                            <p className="text-sm">
                                🌡️ {city.temp}°C | 💧 {city.humidity}% | {city.condition}
                            </p>
                        </div>
                    ))
                )}
            </div>

            <div className="bg-purple-800 p-4 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-white mb-3">💰 Favorite Cryptocurrencies</h3>
                {favoriteCrypto.length === 0 ? (
                    <p className="text-black">No favorite cryptocurrencies yet.</p>
                ) : (
                    favoriteCrypto.map(coin => (
                        <div key={coin.id} className="bg-white bg-opacity-10 p-3 rounded-md text-black mb-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={coin.image} alt={coin.name} className="h-6 w-6" />
                                <span className="font-semibold">{coin.name}</span>
                            </div>
                            <span className="text-sm font-medium">${coin.current_price.toLocaleString()}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
);
}