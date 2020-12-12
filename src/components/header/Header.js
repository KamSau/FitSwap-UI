import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../../helpers/SessionContext";
export default function Header({ children }) {
  const { session, setSession } = useContext(SessionContext);

  return (
    <div className={"header__container--base"}>
      <Link to="/" className="header__logo--base"></Link>
      {session === "" ? (
        <div className={"header__button-group--base"}>
          <Link to="/login" className="header__login--base">
            Log in
          </Link>
          <Link to="/register" className="header__register--base">
            Register
          </Link>
        </div>
      ) : (
        <div className={"header__button-group header__button-group--logged"}>
          <Link
            to="/"
            className="header__button--base"
            onClick={() => {
              setSession("");
            }}
          >
            Log Out
          </Link>
          <Link to="/profileEdit" className="header__button--base">
            Profile Edit
          </Link>
          <Link to="/profile" className="header__button--base">
            Profile
          </Link>
          <Link to="/newPost" className="header__button--base">
            NewPost
          </Link>
        </div>
      )}
      {/* {session === "" ? (
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
      <div className={"header__button-group--base"}>
        <Link
          to="/"
          className="header__login--base"
          onClick={() => {
            setSession("");
          }}
        >
          Log Out
        </Link>
        <Link to="/profileEdit" className="header__register--base">
          Profile Edit
        </Link>
        <Link to="/profile" className="header__register--base">
          Profile
        </Link>
        <Link to="/newPost" className="header__register--base">
          NewPost
        </Link>
      </div>
      <div className={"header__button-group--base"}>
        <Link to="/login" className="header__login--base">
          Log in
        </Link>
        <Link to="/register" className="header__register--base">
          Register
        </Link>
        <Link to="/" className="header__register--base"></Link>
        <Link to="/" className="header__register--base"></Link>
      </div> */}
      {children}
    </div>
  );
}
