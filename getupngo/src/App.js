import "./App.css";
import HomePage from "./pages/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "mapbox-gl/dist/mapbox-gl.css"; //Mapbox Styling
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import FindABike from "./pages/FindABike";

function App() {
  /** ROUTES RENDER THE COMPONENT IN ELEMENT, IF THE PATH URL ATTRIBUTE MATCHES. */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/findabike" element={<FindABike />} />
      </Routes>
    </div>
  );
}

export default App;
