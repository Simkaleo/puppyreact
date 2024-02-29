import { configureStore } from "@reduxjs/toolkit";
import { playersApi } from "../api/playerSlice";

// TODO will need to import smoething from playersSlice

export const store = configureStore({
  reducer: {
    playersApi: playersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApi.middleware),
});
