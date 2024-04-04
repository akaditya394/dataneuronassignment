import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./slices/recipeReducer";
import ingridientListReducer from "./slices/ingridientListReducer";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    ingridientList: ingridientListReducer,
  },
});
