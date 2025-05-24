import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./slices/songSlice";
import movieReducer from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    song: songReducer,
    movie: movieReducer,
  },
});
