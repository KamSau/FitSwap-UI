import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../logo.svg";

export default function Landing() {
  const [state, setState] = useState("");
  useEffect(() => {
    if (state !== "connected") {
      axios
        .get(`http://localhost:5000/api/v1/test`)
        .then((res) => {
          if (res.data === "connected") {
            setState(res.data);
          }
        });
    }
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state !== "connected"
            ? "Waiting for connection"
            : "Connection established!"}
        </p>
      </div>
    </div>
  );
}
