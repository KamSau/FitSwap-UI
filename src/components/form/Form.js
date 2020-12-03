import React from "react";

export default function Form({ modifier, label, children, onSubmitF }) {
  
  return (
    <form className={"form__container--" + modifier} onSubmit={onSubmitF}>
      <div className={"form__label--" + modifier}>{label}</div>
      <div className={"form__content--" + modifier}>{children}</div>
    </form>
  );
}
