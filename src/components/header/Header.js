import React from "react";
import { Link } from "react-router-dom";
export default function Header({ children }) {
  return (
    <div className={"header__container--base"}>
      <Link to="/" className="header__logo--base"></Link>
      <Link to="/login" className="header__login--base">
        Log in
      </Link>
      <Link to="/register" className="header__register--base">
        Register
      </Link>
      {children}
    </div>
  );
}
