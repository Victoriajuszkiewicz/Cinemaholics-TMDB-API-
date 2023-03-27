import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Homepage from "./Pages/Homepage/Homepage.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
