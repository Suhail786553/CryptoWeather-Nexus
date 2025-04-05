'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function CryptoDetails({params}) {
//   const router = useRouter();
  const { id } = params;

  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res1 = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const coinData = await res1.json();
        const res2 = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
        const historyData = await res2.json();

        setCoin(coinData);
        setHistory(historyData.prices);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!coin) return <p className="text-center mt-10">Coin not found.</p>;

  const chartData = {
    labels: history.map(h => new Date(h[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${coin.name} Price (last 7 days)`,
        data: history.map(h => h[1]),
        fill: false,
        borderColor: 'rgb(75,192,192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-4">{coin.name} ({coin.symbol.toUpperCase()})</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img src={coin.image.large} alt={coin.name} className="w-32 h-32" />
        <div>
          <p>💰 Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
          <p>📈 ATH: ${coin.market_data.ath.usd.toLocaleString()}</p>
          <p>📉 ATL: ${coin.market_data.atl.usd.toLocaleString()}</p>
          <p>💸 Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
          <p>📊 Volume (24h): ${coin.market_data.total_volume.usd.toLocaleString()}</p>
        </div>
      </div>

      <Line data={chartData} />
    </div>
  );
}
