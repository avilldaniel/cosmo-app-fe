import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./routes/Todo";
import Calendar from "./routes/Calendar";
import Location from "./routes/Location";

function App() {
  return (
    <>
      <div
        className="
     h-screen w-full bg-gradient-to-b from-slate-900 to-black
     bg-opacity-80 fixed z-50
    text-white"
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo" element={<Todo />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="location" element={<Location />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
