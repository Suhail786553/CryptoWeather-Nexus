import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsData } from "../../lib/news";

export const fetchNews = createAsyncThunk('news/fetch', async () => {
  return await getNewsData();
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
