import { createSlice } from "@reduxjs/toolkit";

const color = {
  WHITE: 0,
  BLACK: 1,
  GREY: 2,
};

const initialState = {
  solution: [],
  table: [],
};

const graphilogicsSlice = createSlice({
  name: "graphilogics",
  initialState,
  reducers: {
    startGame: (state, { payload: puzzle }) => {
      // ["# #", " # ", "# #"]

      state.solution = puzzle.map((s) =>
        s.split("").map((c) => (c === "#" ? color.BLACK : color.GREY))
      );
      state.table = puzzle.map((s) => s.split("").map(() => color.WHITE));
    },
  },
});

// reducer
export const graphilogicsReducer = graphilogicsSlice.reducer;
// action

/// selectors
export const selectTable = (state) => {
  const { solution } = state;

  const leftNumbers = solution.map((row) =>
    row
      .join("")
      .split(2)
      .filter((e) => e !== "")
      .map((e) => e.length)
  );

  const upperNumbers = solution[0].map((e, i) =>
    solution.map((row) =>
      row[i]
        .join("")
        .split(2)
        .filter((e) => e !== "")
        .map((e) => e.length)
    )
  );

  return { leftNumbers, upperNumbers };
};
