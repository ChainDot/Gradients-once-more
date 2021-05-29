import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { FilterContextProvider } from "./context/FilterContext";

ReactDOM.render(
  <FilterContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FilterContextProvider>,

  document.getElementById("root")
);
