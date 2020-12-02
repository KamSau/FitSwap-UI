import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import axios from "axios";
import "./App.css";
import "./resources/css/main.css";
import UserRegistry from "./pages/user-registry/UserRegistry";
import Landing from "./pages/landing/Landing";
import UserProfile from "./pages/profile/UserProfile";
import Post from "./pages/post/Post";

function App() {
  const loggedUser = useContext({});

  return (
    <Router>
      <div className="app__container--base">
        <Header></Header>
        <div className="app__content--base">
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={UserRegistry} />
          <Route path="/post/:username/:post" component={Post} />
          <Route path="/profile/:username" component={UserProfile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
