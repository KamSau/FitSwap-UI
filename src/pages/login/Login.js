import React from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
export default function Login({}) {
  let modifier = "base";
  return (
    <div className={"login__container--" + modifier}>
      <Form modifier="base" label="Log in">
        <Input
          id="emailInput"
          name="emailInput"
          type="email"
          label="Email"
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
