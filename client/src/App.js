import React, { useState, useEffect } from "react";
import "./App.css";
import UsersMetrics from "./UI/Dashboard/UsersMetrics";
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
      <UsersMetrics />
      {/* <Sidebar />
      <Feed />
      <div className="w-1/3 bg-black"></div> */}
    </div>
  );
}

export default App;
