import React, { useState, useEffect, useContext } from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";
import CloudinaryWidget from "../../components/cloudinary-widget/CloudinaryWidget";
import { SessionContext } from "../../helpers/SessionContext";

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
  const [id, setId] = useState("");
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

  /*
  window.onload = function (){
    
  }*/

  useEffect(() => {
    if (fetched !== "connected") {
      axios
        .get(`http://localhost:5000/api/v1/user`, {
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
    let pid = id;
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
      id: pid,
      username: pusername,
      name: pname,
      lastName: plast_name,
      middle_name: pmiddle_name,
      email: pemail,
      cellphone: ptelephone,
      password: ppassword,
      identification: pidentification,
      description: pdescription,
      img_url: purl,
    };

    console.log(user);
    let valid = false;
      valid = validate(user);
      if (valid) {
        let data = user;
        axios.put(`http://localhost:5000/api/v1/user`, data).then(() => {
          setSubmitted(0);
          history.push("/profile");
        });
      }
    
  };

  let validate = (user) => {
    let valid = false;
    if (
      user.id === "" ||
      user.username === "" ||
      user.email === "" ||
      user.name === "" ||
      user.last_name === "" ||
      user.cellphone === ""||
      user.password === ""||
      user.description === ""||
      user.img_url === "" ||
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
          id="id"
          name="id"
          type="text"
          label="Id"
          placeholder={state.id}
          modifier="base"
          onChangeF={(e) => {
            setId(e.target.value);
          }}
        />
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder={state.username}
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
          placeholder={state.name}
          modifier="base"
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
          modifier="base"
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
          modifier="base"
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
          modifier="base"
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
          modifier="base"
          onChangeF={(e) => {
            setIdentification(e.target.value);
          }}
        />
        <Input
          id="description"
          name="description"
          type="text"
          label="Description"
          placeholder={state.description}
          modifier="base"
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
          modifier="base"
          onChangeF={(e) => {
            setCellphone(e.target.value);
          }}
          
        />
         <Input
          id="password"
          name="password"
          type="text"
          label="Password"
          placeholder={state.password}
          modifier="base"
          onChangeF={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          text="Save"
          type="submit"
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
