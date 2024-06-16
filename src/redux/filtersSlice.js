import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = (state.name, action.payload);
    },
  },
});

export const selectName = (state) => state.filters.name;
export const { changeFilter } = slice.actions;
export default slice.reducer;
