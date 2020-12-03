import React, { Component } from "react";
import { Image } from "cloudinary-react";
import Input from "../input/Input";

export default class ClodinaryWidget2 extends Component {
  constructor(props) {
    super(props);

    this.state = { publicUrl: "default-user-img.jpg" };

	// Defined as local variable
    this.widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "esalomc",
        uploadPreset: "esalomcpreset",
        api_key: "752794273244253",
        api_secret: "puQZOOWquXYi7rc0_NjvBHyoIpk"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          this.setState({ publicUrl: result.info.path });
		  props.setUrl(result.info.secure_url);
        }
      }
    );
  }

  showWidget = () => {
    this.widget.open();
  };

  render() {
    return (
      <div className="image-upload__container">
        <div className="image-upload__row">
          <button
            type="button"
            onClick={this.showWidget}
            className="image-upload__button btn-dark"
          >
            Upload Image
          </button>
          <Image
            publicId={this.state.publicUrl}
            secure="true"
            width="110px"
            height="120px"
            className="image-upload__container"
          ></Image>
        </div>
      </div>
    );
  }
}
