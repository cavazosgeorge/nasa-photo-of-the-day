import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto";

// Parent Component
function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
