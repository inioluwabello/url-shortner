import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { shortenURL } from "./urlAPI";

const initialState = {
  urls: [],
  status: "idle",
};

export const shortenURLAsync = createAsyncThunk(
  "url/shortenURL",
  async (url) => {
    const response = await shortenURL(url);
    return response;
  }
);

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shortenURLAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(shortenURLAsync.fulfilled, (state, action) => {
        state.status = "idle";

        const { full_short_link, original_link } = action.payload.result;
        state.urls.push({
          id: nanoid(),
          shortenedLink: full_short_link,
          originalLink: original_link.replace("http://?", ""),
        });
      });
  },
});

export const selectURLs = (state) => state.url.urls;

export default urlSlice.reducer;
