import "./App.css";
import HomePage from "./pages/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<HomePage />]} />
      </Routes>
    </div>
  );
}

export default App;
