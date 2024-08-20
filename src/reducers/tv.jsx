import { createSlice } from "@reduxjs/toolkit";

export const tvSlice = createSlice({
  name: "tv",
  initialState: {
    info: null,
  },
  reducers: {

    loadstate : (state,action)=>{
       state.info = action.payload
    },
    removestate : (state,action) =>{
      state.info = null;
    }

  },
});

// Action creators are generated for each case reducer function
export const { loadstate , removestate} = tvSlice.actions;

export default tvSlice.reducer;
