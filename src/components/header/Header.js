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
      {session === "" ? (
        <Link to="/register" className="header__register--base">
          Register
        </Link>
      ) : (
        <Link to="/profileEdit" className="header__register--base">
          Profile Edit
        </Link>
      )}
      {session === "" ? (
        <Link to="/" className="header__register--base"></Link>
      ) : (
        <Link to="/profile" className="header__register--base">
          Profile
        </Link>
      )}
      {session === "" ? (
        <Link to="/" className="header__register--base"></Link>
      ) : (
        <Link to="/newPost" className="header__register--base">
          NewPost
        </Link>
      )}

      {children}
    </div>
  );
}
