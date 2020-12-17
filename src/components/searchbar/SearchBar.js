import React, { useState, useContext } from "react";
import { SettingsContext } from "../../helpers/SettingsContext";
import Input from "../input/Input";

export default function SearchBar({ onInputChange }) {
  const { settings } = useContext(SettingsContext);
  return (
    <div className={"search__container search__container--" + settings.display}>
      <label
        className={"search__label search__label--" + settings.display}
        htmlFor="search__input"
      >
        <input
          type="text"
          placeholder="Search"
          modifier={"search-" + settings.display}
          onChange={(e) => {
            onInputChange(e);
          }}
          className={"search__input search__input--" + settings.display}
        />
        <i></i>
      </label>
    </div>
  );
}
