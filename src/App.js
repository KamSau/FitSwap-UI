import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    if (state === "") {
      axios.get(`http://localhost:8080/api/v1/test`).then((res) => {
        setState(res.data);
      });
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state === "" ? "Waiting for connection" : "Connection established!"}
        </p>
      </header>
    </div>
  );
}

export default App;
