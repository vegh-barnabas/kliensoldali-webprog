import { createSlice } from "@reduxjs/toolkit";

const color = {
  WHITE: 0,
  BLACK: 1,
  GREY: 2,
};

const initialState = {
  solution: [],
  table: [],
  isSolutionChecking: false
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
    startSolutionCheck: (state) => {
      state.isSolutionChecking = true;
    },
    stopSolutionCheck: (state) => {
      state.isSolutionChecking = false;
    }
  },
});

// reducer
export const graphilogicsReducer = graphilogicsSlice.reducer;

// action creators
export const { startGame, startSolutionCheck, stopSolutionCheck } = graphilogicsSlice.actions;

export const checkSolution = () => dispatch => {
  dispatch(startSolutionCheck());
  setTimeout(() => dispatch(stopSolutionCheck()), 3000);
}

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
