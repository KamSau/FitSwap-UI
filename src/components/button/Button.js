import React from "react";

export default function Button({ type, text, onSubmitF, modifier }) {
  return (
    <div className={"button__container--" + modifier}>
      <button
        className={"button__content--" + modifier}
        type={type}
        onClick={onSubmitF}
      >
        {text}
      </button>
    </div>
  );
}
