import React, { useState, useEffect } from "react";
import "./App.css";
import Feed from "./UI/Feed";
import Sidebar from "./UI/Sidebar";

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <Feed />
      <div className="w-1/3 bg-black"></div>
    </div>
  );
}

export default App;
