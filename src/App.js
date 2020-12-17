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
import { SettingsContext } from "./helpers/SettingsContext";
import Footer from "./components/footer/Footer";
import ProfileEdit from "./pages/profile-edit/ProfileEdit";
import Feed from "./pages/feed/Feed";
import MyProfile from "./pages/profile/MyProfile";
import Settings from "./pages/settings/Settings";
function App() {
  const [loaded, setLoaded] = useState(0);
  const [session, setSession] = useState(sessionStorage.getItem("key"));
  const [settings, setSettings] = useState({ display: "base" });
  const jwt = useMemo(() => ({ session, setSession }), [session, setSession]);
  const config = useMemo(() => ({ settings, setSettings }), [
    settings,
    setSettings,
  ]);

  useEffect(() => {
    if (loaded === 0) {
      let sessionDisplay = sessionStorage.getItem("display");
      if (
        sessionDisplay === null ||
        sessionDisplay === undefined ||
        sessionDisplay === ""
      ) {
        setSettings({ display: "base" });
      } else {
        setSettings({ display: sessionDisplay });
      }
      setLoaded(1);
    }
  }, [loaded]);
  return (
    <Router>
      <SettingsContext.Provider value={config}>
        <SessionContext.Provider value={jwt}>
          <CloudinaryContext cloudName="esalomc">
            <div
              className={"app__container app__container--" + settings.display}
            >
              <Header></Header>
              <div className={"app__content app__content--" + settings.display}>
                <Route exact path="/" component={Feed} />
                <Route path="/register" component={UserRegistry} />
                <Route exact path="/login" component={Login} />
                <Route path="/newPost" component={PostRegistry} />
                <Route path="/post/:username/:post" component={Post} />
                <Route path="/profile/:username" component={UserProfile} />
                <Route exact path="/profile" component={MyProfile} />
                <Route path="/profileEdit" component={ProfileEdit} />
                <Route path="/settings" component={Settings} />
              </div>
              {session !== "" ? <Footer></Footer> : <div />}
            </div>
            <Footer></Footer>
          </CloudinaryContext>
        </SessionContext.Provider>
      </SettingsContext.Provider>
    </Router>
  );
}

export default App;
