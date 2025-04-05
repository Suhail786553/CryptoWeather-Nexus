import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getCryptoData} from '../../lib/crypto';


export const fetchCrypto=createAsyncThunk('crypto/fetch',async()=>{
    return await getCryptoData(['bitcoin', 'ethereum', 'dogecoin']);
});
const cryptoSlice=createSlice({
    name: 'crypto',
    initialState: {
      data: [],
      favorites: JSON.parse(localStorage.getItem('cryptoFavorites')) || [],
      loading: false,
      error: null,
    },
    reducers: {
      toggleFavoriteCrypto: (state, action) => {
        const crypto = action.payload;
        if (state.favorites.includes(crypto)) {
          state.favorites = state.favorites.filter(c => c !== crypto);
        } else {
          state.favorites.push(crypto);
        }
        localStorage.setItem('cryptoFavorites', JSON.stringify(state.favorites));
      },
    },
extraReducers: builder => {
    builder
      .addCase(fetchCrypto.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCrypto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { toggleFavoriteCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;