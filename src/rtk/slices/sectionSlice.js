import { createSlice } from "@reduxjs/toolkit";

const sectionSLice = createSlice({
  name: "sectionSLice",
  initialState: {
    currentSection: { name: "Sec 1", sectionId: 1 },
  },
  reducers: {
    setCurrentSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
});
export const { setCurrentSection } = sectionSLice.actions;
export default sectionSLice.reducer;
