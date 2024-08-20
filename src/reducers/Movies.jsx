import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    info: null,
  },
  reducers: {
    loadstate: (state, action) => {
      state.info = action.payload;
    },
    removestate: (state) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadstate, removestate } = movieSlice.actions;

export default movieSlice.reducer;
