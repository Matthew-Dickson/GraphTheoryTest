import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";
import { ProgessController } from "./Context";

function App() {
  useEffect(() => {
    if (localStorage.getItem("unlockedPages") === null) {
      localStorage.setItem("unlockedPages", JSON.stringify(["graph-theory"]));
      localStorage.setItem(
        "badges",
        JSON.stringify({ binary: false, linear: false, hashing: false })
      );
    }

    if (localStorage.getItem("unlockedQuizes") === null) {
      localStorage.setItem("unlockedQuizes", JSON.stringify([]));
    }
  }, []);
  return (
    <ProgessController>
      <Router>
        <Routes />
      </Router>
    </ProgessController>
  );
}
export default App;
