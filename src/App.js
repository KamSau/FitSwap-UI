import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import axios from "axios";
import { CloudinaryContext } from "cloudinary-react";
import "./App.css";
import "./resources/css/main.css";
import UserRegistry from "./pages/user-registry/UserRegistry";
import PostRegistry from "./pages/post-registry/PostRegistry";
import Landing from "./pages/landing/Landing";
import UserProfile from "./pages/profile/UserProfile";
import Post from "./pages/post/Post";
import { SessionContext } from "./helpers/SessionContext";
import Footer from "./components/footer/Footer";
import ProfileEdit from "./pages/profile-edit/ProfileEdit";
function App() {
  const [session, setSession] = useState("");
  const jwt = useMemo(() => ({ session, setSession }), [session, setSession]);
  return (
    <Router>
      <SessionContext.Provider value={jwt}>
        <CloudinaryContext cloudName="esalomc">
          <div className="app__container--base">
            <Header></Header>
            <div className="app__content--base">
              <Route exact path="/" component={Landing} />
              <Route path="/register" component={UserRegistry} />
              <Route exact path="/login" component={Login} />
              <Route path="/newPost" component={PostRegistry} />
              <Route path="/post/:username/:post" component={Post} />
              <Route path="/profile/:username" component={UserProfile} />
              <Route path="/profileEdit" component={ProfileEdit} />
            </div>
            {session !== "" ? <Footer></Footer> : <div />}
          </div>
        </CloudinaryContext>
      </SessionContext.Provider>
    </Router>
  );
}

export default App;
