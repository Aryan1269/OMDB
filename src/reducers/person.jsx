import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    info: null,
  },
  reducers: {
    loadstate: (state, action) => {
      state.info = action.payload;
    },
    removestate: (state, action) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadstate, removestate } = personSlice.actions;

export default personSlice.reducer;
