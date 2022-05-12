import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: 1,
            puzzle: ["###", " # "] 
        }
    ]
};

const graphilogicsListSlice = createSlice({
  name: "graphilogicsList",
  initialState,
  reducers: {
      setList: (state, {payload: puzzles}) => {
          state.list = puzzles;
      }
  },
  extraReducers: (builder) => {
      // pending, fullfilled, rejected
      builder.addCase(fetchList.fulfilled, (state, { payload: puzzles }) => {
        state.list = puzzles;
      });
  }
});

// reducer
export const graphilogicsListReducer = graphilogicsListSlice.reducer;

// action creators
export const { setList } = graphilogicsListSlice.actions;

export const fetchList = createAsyncThunk(
    'graphilogicsList/fetchList',
    async () => {
        const response = await fetch('http://localhost:3030/puzzles');
        const result = await response.json();

        return result.data;
    }
);
