'use client';

import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function RealTimeHandler() {
  useEffect(() => {
    // --- CoinCap WebSocket for BTC & ETH ---
    const priceSocket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');

    priceSocket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      for (const [coin, price] of Object.entries(data)) {
        const payload = {
          type: 'price_alert',
          coin,
          price: parseFloat(price).toFixed(2),
        };

        toast.success(`💸 ${payload.coin.toUpperCase()} → $${payload.price}`, {
          id: `${payload.coin}-price`,
        });
      }
    };

    // --- Simulated Weather Alert every 20s ---
    const simulateWeatherAlert = () => {
      const payload = {
        type: 'weather_alert',
        city: 'New York',
        message: '⛈️ Heavy rain and wind advisory!',
      };

      toast.error(`${payload.city}: ${payload.message}`, {
        id: 'weather-alert',
      });
    };

    const interval = setInterval(simulateWeatherAlert, 20000);

    return () => {
      priceSocket.close();
      clearInterval(interval);
    };
  }, []);

  return <Toaster position="top-center" reverseOrder={false} />;
}
