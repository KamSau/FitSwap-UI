import React, { useState, useEffect } from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Axios from "axios";
import CloudinaryWidget from "../../components/cloudinary-widget/CloudinaryWidget";

export default function UserUpdate({history}) {
  let modifier = "base";
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log("PRESSED", submitted);
    if (submitted == 1) {
      sendUpdate();
    }
  }, [submitted]);

  let sendUpdate = () => {
    let pusername = username;
    let pname = name;
    let purl = url;

    let user = {
      username: pusername,
      url: purl,
      name: pname,
    };

    console.log(user);
    let valid = false;
      valid = validate(user);
      if (valid) {
        let data = user;
        Axios.put("http://localhost:5000/api/v1/user", data).then(() => {
          setSubmitted(0);
          history.push("/profile/jpozuelo");
        });
      }
    
  };

  let validate = (user) => {
    let valid = false;
    if (
      user.username === "" ||
      user.url === "" ||
      user.name === "" 
    ) {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  };

  return (
    <div className={"login__container--" + modifier}>
      <Form
        modifier="base"
        label="Update Account"
        onSubmitF={(e) => {
          e.preventDefault();
          setSubmitted(1);
        }}
      >
        <CloudinaryWidget setUrl={setUrl}></CloudinaryWidget>
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder=""
          modifier="base"
          onChangeF={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          id="name"
          name="name"
          type="text"
          label="Name"
          placeholder=""
          modifier="base"
          onChangeF={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          text="Save"
          type="submit"
          modifier="base"
          onSubmitF={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        />
      </Form>
    </div>
  );
}
