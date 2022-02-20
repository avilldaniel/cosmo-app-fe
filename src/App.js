import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Todo from "./routes/Todo";
import Calendar from "./routes/Calendar";
import Location from './routes/Location';

function App() {
  return (
    <div
      className="
     h-screen bg-gradient-to-b from-indigo-900 to-black
    text-white"
    >
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="location" element={<Location />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
