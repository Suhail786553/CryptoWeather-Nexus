'use client';

import WeatherSection from '../components/weatherSection';
import { motion } from "framer-motion";
import CryptoSection from '../components/cryptoSection';
import NewsSection from '../components/newsSection';
import FavoriteSection from '../components/favoritesSection';
import { useState } from 'react';
import Link from 'next/link';
const MotionLink = motion(Link);
export default function Dashboard() {

    const [activeTab, setActiveTab] = useState('weather');
    return (
        <main className="p-6 bg-gray-900 min-h-screen text-white">
            <h2 className="text-4xl font-bold mb-6">Dashboard</h2>
            <MotionLink
                href="/"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-800 transition duration-300 px-6 py-3 rounded-xl text-white font-medium shadow-lg"
            >
                🚀Go to Home
            </MotionLink>
            <div className="flex space-x-4 mb-6">
                <button onClick={() => { setActiveTab("weather") }} className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === 'weather' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    Weather
                </button>
                <button onClick={() => { setActiveTab('crypto') }} className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === 'crypto' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    Crypto
                </button>
                <button
                    onClick={() => setActiveTab('news')}
                    className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === 'news' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                >
                    News
                </button>
                <button onClick={() => setActiveTab('favorites')} className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === 'favorites' ? 'bg-yellow-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}>
        ★ Favorites
    </button>
            </div>
            {/* Tab Content */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                {activeTab === 'weather' && <WeatherSection />}
                {activeTab === 'crypto' && <CryptoSection />}
                {activeTab === 'news' && <NewsSection />}
                {activeTab==='favorites' && <FavoriteSection/>}
            </div>
        </main>
    );
}
