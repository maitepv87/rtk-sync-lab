import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie !== action.payload);
    },
  },
  // Watching for other actions
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return initialState;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
