'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCrypto, toggleFavoriteCrypto } from '../redux/slices/cryptoSlice';

export default function CryptoSection() {
  const dispatch = useDispatch();
  const { data, loading, error, favorites } = useSelector(state => state.crypto);

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">🚀 Cryptocurrency Stats</h2>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data?.map(coin => (
          <div
            key={coin.id}
            className="border border-gray-200 p-4 rounded-lg flex flex-col items-center bg-gray-50 hover:shadow-md transition relative"
          >
            {/* Favorite star button in top-right corner */}
            <button
              onClick={() => dispatch(toggleFavoriteCrypto(coin.name))}
              className="absolute top-2 right-2 text-yellow-400 text-2xl"
              title="Toggle Favorite"
            >
              {favorites.includes(coin.name) ? '★' : '☆'}
            </button>

            <img src={coin.image} alt={coin.name} className="h-12 mb-2" />
            <h3 className="font-semibold text-lg">{coin.name}</h3>
            <p className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</p>
            <p className="mt-2 text-xl font-bold">${coin.current_price.toLocaleString()}</p>
            <p className={`text-sm mt-1 ${coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              24h: {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Market Cap: ${coin.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
