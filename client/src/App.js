import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Homepage from "./Pages/Homepage/Homepage.js";
import Movies from "./Pages/Movies/Movies.js";
import Series from "./Pages/Series/Series.js";

import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
