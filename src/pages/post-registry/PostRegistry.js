import React from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import CloudinaryWidget from "../../components/cloudinary-widget/CloudinaryWidget";

export default function UserRegistry({}) {
  let modifier = "base";
  return (
    <div className={"login__container--" + modifier}>
      <Form modifier="base" label="Create Post">
      <div className="column">
                <CloudinaryWidget></CloudinaryWidget>
                <Input type="text" placeholder="Title" id="title" className="" />
                <Input
                  type="text"
                  placeholder="Description"
                  id="description"
                  className=""
                />
                 </div>
      </Form>
    </div>
  );
}
