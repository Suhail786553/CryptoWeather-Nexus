'use client';
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import cryptoReducer from './slices/cryptoSlice';
// import newsReducer from './slices/newsSlice';
// import websocketReducer from './slices/websocketSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    crypto: cryptoReducer,
    // news: newsReducer,
    // websocket: websocketReducer,
  },
});
