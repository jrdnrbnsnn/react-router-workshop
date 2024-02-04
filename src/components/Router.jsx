import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Green from "./Green";
import { Routes, Route } from "react-router-dom";

export default function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
