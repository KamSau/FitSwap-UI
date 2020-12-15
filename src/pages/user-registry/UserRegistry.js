import React, { useState, useEffect, useContext } from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Axios from "axios";
import { SettingsContext } from "../../helpers/SettingsContext";

export default function UserRegistry({ history }) {
  let modifier = "base";
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    console.log("PRESSED", submitted);
    if (submitted == 1) {
      sendRegistry();
      // if (valid) {
      //   Axios.post(process.env.BACKEND + "/api/v1/post", post).then((res) => {
      //     console.log(res.data);
      //     setSubmitted(0);
      //     //history.push("/profile/ksauma");
      //   });
      // }
    }
  }, [submitted]);

  let sendRegistry = () => {
    let pusername = username;
    let pname = name;
    let plast_name = lastName;
    let pmiddle_name = middleName;
    let pemail = email;
    let ptelephone = cellphone;
    let ppassword = password;
    let ppasswordConf = passwordConf;
    let pidentification = identification;

    let user = {
      username: pusername,
      name: pname,
      last_name: plast_name,
      middle_name: pmiddle_name,
      email: pemail,
      cellphone: ptelephone,
      password: ppassword,
      identification: pidentification,
      description: "",
      img_url:
        "https://res.cloudinary.com/esalomc/image/upload/v1582659946/default-user-img.jpg",
    };

    console.log(user);
    let valid = false;
    if (password === passwordConf) {
      valid = validate(user);
      if (valid) {
        let data = user;
        Axios.post("https://fitswapbackend.herokuapp.com/api/v1/user", data).then(() => {
          setSubmitted(0);
          history.push("/");
        });
      }
    }
  };

  let validate = (user) => {
    let valid = false;
    if (
      user.username === "" ||
      user.password === "" ||
      user.email === "" ||
      user.name === "" ||
      user.last_name === "" ||
      user.cellphone === ""
    ) {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  };

  return (
    <div className={"login__container--" + settings.display}>
      <Form
        modifier={settings.display}
        label="Create Account"
        onSubmitF={(e) => {
          e.preventDefault();
          setSubmitted(1);
        }}
      >
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder=""
          modifier={settings.display}
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
          modifier={settings.display}
          onChangeF={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          id="middle_name"
          name="middle_name"
          type="text"
          label="Middle Name"
          placeholder=""
          modifier={settings.display}
          onChangeF={(e) => {
            setMiddleName(e.target.value);
          }}
        />
        <Input
          id="last_name"
          name="last_name"
          type="text"
          label="Last Name"
          placeholder=""
          modifier={settings.display}
          onChangeF={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder=""
          modifier={settings.display}
          onChangeF={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="identification"
          name="identification"
          type="identification"
          label="Identification"
          placeholder=""
          modifier={settings.display}
          onChangeF={(e) => {
            setIdentification(e.target.value);
          }}
        />
        <Input
          id="cellphone"
          name="cellphone"
          type="tel"
          label="Phone Number"
          placeholder=""
          modifier={settings.display}
          onChangeF={(e) => {
            setCellphone(e.target.value);
          }}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder=""
          modifier={settings.display}
          onChangeF={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          id="passwordConfInput"
          name="passwordConfInput"
          type="password"
          label="Password Confirmation"
          placeholder=""
          modifier={settings.display}
          onChangeF={(e) => {
            setPasswordConf(e.target.value);
          }}
        />
        <Button
          text="Sign up"
          type="submit"
          modifier={settings.display}
          onSubmitF={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        />
      </Form>
    </div>
  );
}
