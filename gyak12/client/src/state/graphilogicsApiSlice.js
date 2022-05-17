import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030";

export const graphilogicsApiSlice = createApi({
  reducerPath: "graphilogicsApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPuzzles: builder.query({
      query: () => ({
        url: "puzzles",
      }),
      transformResponse: (response) => response.data,
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body,
      }),
    }),
  }),
});

// reducer
export const graphilogicsApiSliceReducer = graphilogicsApiSlice.reducer;

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPuzzlesQuery, useLoginMutation } = graphilogicsApiSlice;
