import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //this part is needed for routes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* this part is needed for routes to work on app.js */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
