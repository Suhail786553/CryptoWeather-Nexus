import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherData } from '../../lib/weather';

export const fetchWeather = createAsyncThunk('weather/fetch', async () => {
  return await getWeatherData(['New York', 'London', 'Tokyo']);
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavoriteCity: (state, action) => {
      const city = action.payload;
      if (state.favorites.includes(city)) {
        state.favorites = state.favorites.filter(c => c !== city);
      } else {
        state.favorites.push(city);
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('weatherFavorites', JSON.stringify(state.favorites));
      }
    },
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
export const { toggleFavoriteCity } = weatherSlice.actions;
export default weatherSlice.reducer;
