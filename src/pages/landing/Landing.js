import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import logo from "../../logo.svg";
import { SessionContext } from "../../helpers/SessionContext";
import Button from "../../components/button/Button";

export default function Landing() {
  const [state, setState] = useState("");
  const { session, setSession } = useContext(SessionContext);
  useEffect(() => {
    if (state !== "connected") {
      axios.get(`http://fitswapbackend-env.eba-zdurp42b.us-east-2.elasticbeanstalk.com/api/v1/test`).then((res) => {
        if (res.data === "connected") {
          setState(res.data);
        }
      });
    } else {
      if (session !== "") {
        axios
          .get(`http://fitswapbackend-env.eba-zdurp42b.us-east-2.elasticbeanstalk.com/api/v1/session`, {
            headers: { Authorization: "Bearer " + session },
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    }
  }, [session]);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state !== "connected"
            ? "Waiting for connection"
            : "Connection established!"}
        </p>
        <p></p>
      </div>
    </div>
  );
}
