import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
export default function Login({}) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  let modifier = "base";
  return (
    <div className={"login__container--" + modifier}>
      <Form modifier="base" label="Log in">
        <Input
          id="usernameInput"
          name="usernamenput"
          type="username"
          label="Username"
          placeholder=""
          modifier="base"
          onChangeF={() => {
            console.log("typing");
          }}
        />
        <Input
          id="passwordInput"
          name="passwordInput"
          type="password"
          label="Password"
          placeholder=""
          modifier="base"
          onChangeF={() => {
            console.log("typing");
          }}
        />
        <Button
          text="Log in"
          type="button"
          modifier="base"
          onSubmitF={() => {
            console.log("sending...");
          }}
        />
      </Form>
    </div>
  );
}
