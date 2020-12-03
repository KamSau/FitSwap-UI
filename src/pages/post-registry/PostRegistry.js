import React, { useEffect, useState, useContext } from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Axios from "axios";
import CloudinaryWidget from "../../components/cloudinary-widget/CloudinaryWidget";
import { SessionContext } from "../../helpers/SessionContext";

export default function PostRegistry({ history }) {
  let modifier = "base";

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pressed, setPressed] = useState(0);

  const { session, setSession } = useContext(SessionContext);

  useEffect(() => {
    console.log("PRESSED", pressed);
    if (pressed == 1) {
      let purl = url;
      let ptitle = title;
      let pdescription = description;

      console.log(purl, ptitle, pdescription);
      let post = {
        url: purl,
        title: ptitle,
        description: pdescription,
        userId: 1,
      };
      console.log(post);
      let valid = false;
      valid = validate(post);
      if (valid) {
        Axios.post("http://localhost:5000/api/v1/post", post, {
          headers: { Authorization: { Bearer: session } },
        }).then((res) => {
          console.log(res.data);
          setPressed(0);
          history.push("/profile/ksauma");
        });
      }
    }
  }, [pressed]);

  let validate = (user) => {
    let valid = false;
    if (
      user.url === "" ||
      user.title === "" ||
      user.description === "" ||
      pressed == 0
    ) {
      valid = false;
      setPressed(0);
    } else {
      valid = true;
    }
    return valid;
  };

  return (
    <div className={"login__container--" + modifier}>
      <Form modifier="base" label="New Post">
        <CloudinaryWidget setUrl={setUrl}></CloudinaryWidget>

        <Input
          id="title"
          name="Title"
          type="text"
          label="Title"
          placeholder=""
          modifier="base"
          onChangeF={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          id="description"
          name="Description"
          type="text"
          label="Description"
          placeholder=""
          modifier="base"
          onChangeF={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button
          text="Post"
          type="submit"
          modifier="base"
          onSubmitF={(event) => {
            event.preventDefault();
            setPressed(1);
          }}
        />
      </Form>
    </div>
  );
}