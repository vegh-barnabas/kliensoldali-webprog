import React from "react";
import ReactDOM from "react-dom";
import { tracksServiceContext, TracksServiceProvider } from "./state/TracksServiceProvider";

import { App } from "./views/App";

// ReactDOM.render(
//   <tracksServiceContext.Provider value={42}>
//     <App />
//   </tracksServiceContext.Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <TracksServiceProvider>
    <App />
  </TracksServiceProvider>,
  document.getElementById("root")
);
