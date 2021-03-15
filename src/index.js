import React from "react";
import ReactDOM from "react-dom";
import "./components/New folder/index.css";
import App from "./components/New folder/App";
import { AppProvider } from "./components/New folder/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
