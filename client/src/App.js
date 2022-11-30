import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UsersMetrics from "./UI/Dashboard/UsersMetrics";
import EventDashboard from "./UI/pages/EventDashboard";
import { Home } from "./UI/pages/Home";
import Feed from "./UI/Twitter/Feed";
import Sidebar from "./UI/Twitter/Sidebar";

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="flex flex-row">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/event_dashboard" element={<EventDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
