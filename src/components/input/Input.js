import React from "react";

export default function Input({
  name,
  id,
  type,
  placeholder,
  modifier,
  label,
  onChangeF,
}) {
  return (
    <div className={"input__container--" + modifier}>
      <label htmlFor={id} className={"input__label--" + modifier}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChangeF}
        className={"input__content--" + modifier}
      />
    </div>
  );
}
