import { configureStore } from "@reduxjs/toolkit";
import { graphilogicsApiSlice, graphilogicsApiSliceReducer } from "./graphilogicsApiSlice";
import { graphilogicsReducer } from "./graphilogicsSlice";

export const store = configureStore({
  reducer: {
    graphilogics: graphilogicsReducer,
    [graphilogicsApiSlice.reducerPath]: graphilogicsApiSliceReducer
  },
  // middleware: (getDefaultMiddleWare) => 
  //   getDefaultMiddleware().concat(graphilogicsApiSlice.middleware)
});