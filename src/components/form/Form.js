import React from "react";

export default function Form({ modifier, label, children }) {
  return (
    <div className={"form__container--" + modifier}>
      <div className={"form__label--" + modifier}>{label}</div>
      <div className={"form__content--" + modifier}>{children}</div>
    </div>
  );
}
