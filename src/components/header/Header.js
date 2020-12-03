import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../../helpers/SessionContext";
export default function Header({ children }) {
  const { session, setSession } = useContext(SessionContext);
  return (
    <div className={"header__container--base"}>
      <Link to="/" className="header__logo--base"></Link>
      {session === "" ? (
        <Link to="/login" className="header__login--base">
          Log in
        </Link>
      ) : (
        <Link
          to="/"
          className="header__login--base"
          onClick={() => {
            setSession("");
          }}
        >
          Log Out
        </Link>
      )}

      <Link to="/register" className="header__register--base">
        Register
      </Link>
      {children}
    </div>
  );
}
