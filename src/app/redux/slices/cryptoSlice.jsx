import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getCryptoData} from '../../lib/crypto';


export const fetchCrypto=createAsyncThunk('crypto/fetch',async()=>{
    return await getCryptoData(['bitcoin', 'ethereum', 'dogecoin']);
});
const cryptoSlice=createSlice({
    name: 'crypto',
    initialState: {
      data: [],
      loading: false,
      error: null,
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
export default cryptoSlice.reducer;