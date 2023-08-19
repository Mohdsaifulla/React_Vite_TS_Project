import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TableComp from "./components/TableComp";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tablecomp" element={<TableComp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
