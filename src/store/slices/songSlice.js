import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const initialState = {
  songs: [],
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    //Action creators: "song" + "addSong" = "song/addSong"
    addSong: (state, action) => {
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter((song) => song !== action.payload);
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
export const { addSong, removeSong, resetSong } = songSlice.actions;

export default songSlice.reducer;
