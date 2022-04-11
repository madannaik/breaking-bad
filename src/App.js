import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharacterDetails } from "./pages/CharacterDetails";
import { HomePage } from "./pages/HomePage";
import "./styles/main.scss";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="character" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
