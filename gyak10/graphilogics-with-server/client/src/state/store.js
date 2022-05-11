import { configureStore } from "@reduxjs/toolkit";
import { graphilogicsReducer } from "./graphilogicsSlice";

export const store = configureStore({
  reducer: graphilogicsReducer,
});
