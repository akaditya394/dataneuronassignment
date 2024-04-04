import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: null,
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipe = action.payload;
    },
    removeRecipe: (state) => {
      state.recipe = null;
    },
  },
});

export const { addRecipe, removeRecipe } = recipeSlice.actions;

export const selectrecipe = (state) => state.recipe.recipe;

export default recipeSlice.reducer;
