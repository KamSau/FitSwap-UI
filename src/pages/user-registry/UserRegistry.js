import React from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export default function UserRegistry({}) {
  let modifier = "base";
  return (
    <div className={"login__container--" + modifier}>
      <Form modifier="base" label="Create Account">
        <Input
          id="usernameInput"
          name="usernameInput"
          type="text"
          label="Username"
          placeholder=""
          modifier="base"
          onChangeF={() => {
            console.log("typing");
          }}
        />
        <Input
          id="nameInput"
          name="nameInput"
          type="text"
          label="Name"
          placeholder=""
          modifier="base"
          onChangeF={() => {
            console.log("typing");
          }}
        />
        <Input
          id="middleNameInput"
          name="middleNameInput"
          type="text"
          label="Middle Name"
          placeholder=""
          modifier="base"
          onChangeF={() => {
            console.log("typing");
          }}
        />
        <Input
          id="lastNameInput"
          name="lastNameInput"
          type="text"
          label="Last Name"
          placeholder=""
          modifier="base"
          onChangeF={() => {
            console.log("typing");
          }}
        />
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
          id="telephoneInput"
          name="telephoneInput"
          type="tel"
          label="Phone Number"
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
        <Input
          id="passwordConfInput"
          name="passwordConfInput"
          type="password"
          label="Password Confirmation"
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
