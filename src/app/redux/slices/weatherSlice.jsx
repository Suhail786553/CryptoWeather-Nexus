import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherData } from '../../lib/weather';

export const fetchWeather = createAsyncThunk('weather/fetch', async () => {
  return await getWeatherData(['New York', 'London', 'Tokyo']);
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
