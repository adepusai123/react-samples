import { createSlice } from "@reduxjs/toolkit";

interface StudioState {
  isEnabled: boolean;
}

const initialState: StudioState = {
  isEnabled: import.meta.env.VITE_ENABLE_STUDIO === "true", // Read from .env
};

const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {
    toggleStudio: (state, action) => {
      state.isEnabled = action.payload;
    },
  },
});

export const { toggleStudio } = studioSlice.actions;
export default studioSlice.reducer;
