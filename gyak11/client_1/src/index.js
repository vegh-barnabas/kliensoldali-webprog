import React from "react";
import App from "./views/App";
import "./grafilogika.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { checkSolution, startSolutionCheck, stopSolutionCheck } from "./state/graphilogicsSlice";
import { fetchList, setList } from "./state/graphilogicsListSlice";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// store.dispatch(startSolutionCheck());
// setTimeout(() => store.dispatch(stopSolutionCheck()), 3000);

// store.dispatch(checkSolution());

// store.dispatch(setList([
//   {
//     id: 1,
//     puzzle: ["###", " # "]
//   },
//   {
//     id: 2,
//     puzzle: ["###", " # "]
//   },
//   {
//     id: 3,
//     puzzle: ["###", " # "]
//   },
// ]));

store.dispatch(fetchList());