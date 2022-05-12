import { configureStore } from "@reduxjs/toolkit";
import { graphilogicsListReducer } from "./graphilogicsListSlice";
import { graphilogicsReducer } from "./graphilogicsSlice";

export const store = configureStore({
  reducer: {
    graphilogics: graphilogicsReducer,
    graphilogicsList: graphilogicsListReducer
  }
});
