import React, { useState, useEffect, useContext } from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";
import CloudinaryWidget from "../../components/cloudinary-widget/CloudinaryWidget";
import { SessionContext } from "../../helpers/SessionContext";
import { SettingsContext } from "../../helpers/SettingsContext";

export default function UserUpdate({ history }) {
  let modifier = "base";
  const [state, setState] = useState({id: "",
    username: "",
    name: "",
    lastName: "",
    middleName: "",
    email: "",
    cellphone: "",
    password: "",
    identification: "",
    description: "",
    img_url: "",});
  const [img_url, setUrl] = useState("");
  const [fetched, setFetched] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { session, setSession } = useContext(SessionContext);
  const { settings } = useContext(SettingsContext);
  /*
  window.onload = function (){
    
  }*/

  useEffect(() => {
    if (fetched !== "connected") {
      axios
        .get(`https://fitswapbackend.herokuapp.com/api/v1/user`, {
          headers: { Authorization: "Bearer " + session },
        })
        .then((res) => {
          setState(res.data);
          setFetched("connected");
          console.log(fetched);
        });
    }
  }, [fetched]);
  useEffect(() => {
    console.log("PRESSED", submitted);
    if (submitted == 1) {
      sendUpdate();
    }
  }, [submitted]);

  let sendUpdate = () => {
    let pusername = username;
    let pname = name;
    let plast_name = lastName;
    let pmiddle_name = middleName;
    let pemail = email;
    let ptelephone = cellphone;
    let ppassword = password;
    let pidentification = identification;
    let pdescription = description;
    let purl = img_url;

    let user = {
      username: pusername,
      name: pname,
      lastName: plast_name,
      middle_name: pmiddle_name,
      email: pemail,
      cellphone: ptelephone,
      password: ppassword,
      identification: pidentification,
      description: pdescription,
      img_url: purl
    };

    console.log(user);
    let valid = false;
      valid = validate(user);
      if (valid) {
        let data = user;
        axios.put(`https://fitswapbackend.herokuapp.com/api/v1/user`, data, {headers: { Authorization: "Bearer " + session },}).then(() => {
          setSubmitted(0);
          history.push("/profile");
        });
      }else{
		setSubmitted(0);
	  }
    
  };

  let validate = (user) => {
    let valid = false;
    if (
      submitted == 0
    ) {
      valid = false;
      setSubmitted(0);
    } else {
      valid = true;
    }
    return valid;
  };

  return (
    <div className={"login__container--" + settings.display}>
      <Form
        modifier={settings.display}
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
          placeholder={state.username}
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
          placeholder={state.name}
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
          placeholder={state.middleName}
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
          placeholder={state.lastName}
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
          placeholder={state.email}
          modifier={settings.display}
          onChangeF={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="identification"
          name="identification"
          type="text"
          label="Identification"
          placeholder={state.identification}
          modifier={settings.display}
          onChangeF={(e) => {
            setIdentification(e.target.value);
          }}
        />
        <Input
          id="password"
          name="password"
		  type="password"
		  hidden={true}
          label="Password"
          value={state.password}
          modifier={settings.display}
          onChangeF={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          id="description"
          name="description"
          type="text"
          label="Description"
          placeholder={state.description}
          modifier={settings.display}
          onChangeF={(e) => {
            setDescription(e.target.value);
          }}
        />
 
        <Input
          id="cellphone"
          name="cellphone"
          type="tel"
          label="Phone Number"
          placeholder={state.cellphone}
          modifier={settings.display}
          onChangeF={(e) => {
            setCellphone(e.target.value);
          }}
          
        />
        <Button
          text="Save"
          type="submit"
          modifier={settings.display}
          onSubmitF={(e) => {
            e.preventDefault();
            setSubmitted(1);
          }}
        />
      </Form>
    </div>
  );
}
