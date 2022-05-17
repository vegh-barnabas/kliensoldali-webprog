import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import {
  graphilogicsApiSlice,
  graphilogicsApiSliceReducer,
} from "./graphilogicsApiSlice";
import { graphilogicsReducer } from "./graphilogicsSlice";

export const store = configureStore({
  reducer: {
    graphilogics: graphilogicsReducer,
    auth: authReducer,
    [graphilogicsApiSlice.reducerPath]: graphilogicsApiSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(graphilogicsApiSlice.middleware),
});
