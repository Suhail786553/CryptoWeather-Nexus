'use client';

import WeatherSection from '../components/weatherSection';
import CryptoSection from '../components/cryptoSection';
import { useState } from 'react';
// import NewsSection from '../../components/NewsSection';

export default function Dashboard() {

    const [activeTab, setActiveTab] = useState('weather');
    return (
        <main className="p-6 bg-gray-900 min-h-screen text-white">
            <h2 className="text-4xl font-bold mb-6">Dashboard</h2>
            <div className="flex space-x-4 mb-6">
                <button onClick={() => { setActiveTab("weather") }} className={`px-4 py-2 rounded cursor-pointer ${activeTab === 'weather' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    Weather
                </button>
                <button onClick={()=>{setActiveTab('crypto')}} className={`px-4 py-2 rounded cursor-pointer ${activeTab==='crypto'? 'bg-blue-600':'bg-gray-700 hover:bg-gray-600'}`}>
                    Crypto
                </button>
                {/* <button
          onClick={() => setActiveTab('news')}
          className={`px-4 py-2 rounded ${
            activeTab === 'news' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          News
        </button> */}
            </div>
            {/* Tab Content */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        {activeTab === 'weather' && <WeatherSection />}
        {activeTab === 'crypto' && <CryptoSection />}
        {/* {activeTab === 'news' && <NewsSection />} */}
      </div>
        </main>
    );
}
