import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Link } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <>
      <h2>Hello App component</h2>
      <Link to="/about">ABOUT</Link>
      <Link to="/home">Home</Link>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
