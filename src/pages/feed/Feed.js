import React, { useState, useContext } from "react";
import { SessionContext } from "../../helpers/SessionContext";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { SettingsContext } from "../../helpers/SettingsContext";
import SearchBar from "../../components/searchbar/SearchBar";
export default function Feed() {
  const [perfil, setPerfil] = useState([]);
  const [posts, setPosts] = useState([]);
  const [asked, setAsked] = useState(0);
  const [asked2, setAsked2] = useState(0);
  const [items, setItems] = useState([]);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { session, setSession } = useContext(SessionContext);
  const { settings, setSettings } = useContext(SettingsContext);
  const it = [];

  const fetchData = async () => {
    if (asked) return;
    const res = await axios
      .get("https://fitswapbackend.herokuapp.com/api/v1/post/")
      .then(async (responseP) => {
        console.log(responseP.data);
        setAsked(1);
        setPosts(responseP.data);

        for (const [index, value] of responseP.data.entries()) {
          let username = "";
          const res = await axios
            .get(
              "https://fitswapbackend.herokuapp.com/api/v1/user/id/" +
                value.userId
            )
            .then((res) => {
              console.log(res.data);
              username = res.data.username;
              it.push(
                <div className="feed__item-container feed__item-container--base">
                  <div
                    className={"feed__item feed__item--" + settings.display}
                    tabIndex={0}
                    key={value.id}
                  >
                    <div className="feed__poster-info--base">
                      <div className="image">
                        <Link to={"/profile/" + res.data.username}>
                          <img
                            src={res.data.image}
                            className="feed__poster-image--base"
                          />
                        </Link>
                      </div>
                      <div className="id">
                        <Link
                          to={"/profile/" + res.data.username}
                          className={
                            "feed__poster-username--" + settings.display
                          }
                        >
                          {res.data.username}
                        </Link>
                      </div>
                    </div>
                    <Link to={"/post/" + username + "/" + value.id}>
                      <img
                        src={value.url}
                        className="gallery-image"
                        alt={value.description}
                      />
                      <div className="gallery-item-type">
                        <span className="visually-hidden">Gallery</span>
                        <i className="fas fa-clone" aria-hidden="true" />
                      </div>
                      <div className="feed__image-overlay--base">
                        <div className="feed__overlay-text--base">
                          {value.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            });
        }
        console.log(it);
        setItems(it.reverse());
      })
      .catch((error) => {
        console.log(error);
        console.log("No existen posts");
      });
  };

  let filterResults = (e) => {
    setQuery(e.target.value);
    setLoading(true);
    setMessage("");
    console.log(items);
    let filteredPosts = posts.filter((p) => {
      p.description.includes(query);
    });
  };

  const project = () => {
    if (!asked2) {
      fetchData();
      setAsked2(1);
    }
    return (
      <div className="perfilFont">
        <header></header>
        <main>
          {/* <SearchBar onInputChange={filterResults} /> */}
          <div className="container">
            <div className="gallery">{items}</div>
            {/* End of gallery */}
            <div className="loader" />
          </div>
          {/* End of container */}
        </main>
      </div>
    );
  };

  return project();
}
