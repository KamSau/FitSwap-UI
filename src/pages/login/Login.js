import React, { useState, useEffect } from "react";
import Axios from "axios";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
export default function Login({}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(0);

  useEffect(() => {
    console.log("PRESSED", submitted);
    if (submitted == 1) {
      let pusername = username;
      let ppassword = password;
      let creds = {
        username: pusername,
        password: ppassword,
      };
      console.log(creds);
      let valid = false;
      valid = validate(creds);
      if (valid) {
        Axios.post("http://localhost:5000/api/v1/credentials", creds).then(
          (res) => {
            console.log(res.data);

            setSubmitted(0);
          }
        );
      }
    }
  }, [submitted]);

  let validate = (user) => {
    let valid = false;
    if (user.username === "" || user.password === "" || submitted == 0) {
      valid = false;
      setSubmitted(0);
    } else {
      valid = true;
    }
    return valid;
  };
  let modifier = "base";
  return (
    <div className={"login__container--" + modifier}>
      <Form
        modifier="base"
        label="Log in"
        onSubmitF={(e) => {
          e.preventDefault();
          setSubmitted(1);
        }}
      >
        <Input
          id="usernameInput"
          name="usernamenput"
          type="username"
          label="Username"
          placeholder=""
          modifier="base"
          onChangeF={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          id="passwordInput"
          name="passwordInput"
          type="password"
          label="Password"
          placeholder=""
          modifier="base"
          onChangeF={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          text="Log in"
          type="button"
          modifier="base"
          onSubmitF={(e) => {
            e.preventDefault();
            setSubmitted(1);
          }}
        />
      </Form>
    </div>
  );
}
