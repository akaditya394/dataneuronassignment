import { createSlice } from "@reduxjs/toolkit";

export const ingridientListSlice = createSlice({
  name: "ingridientList",
  initialState: {
    ingridientList: [],
  },
  reducers: {
    addingridientList: (state, action) => {
      state.ingridientList = [...state.ingridientList, action.payload];
    },
    removeingridientList: (state, action) => {
      state.ingridientList = state.ingridientList.filter(
        (name) => name !== action.payload
      );
    },
  },
});

export const { addingridientList, removeingridientList } =
  ingridientListSlice.actions;

export const selectingridientList = (state) =>
  state.ingridientList.ingridientList;

export default ingridientListSlice.reducer;
