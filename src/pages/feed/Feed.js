import React, { useState, useContext } from "react";
import { SessionContext } from "../../helpers/SessionContext";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
export default function Feed() {
  const [perfil, setPerfil] = useState([]);
  const [posts, setPosts] = useState([]);
  const [asked, setAsked] = useState(0);
  const [asked2, setAsked2] = useState(0);
  const [items, setItems] = useState([]);
  const { session, setSession } = useContext(SessionContext);
  const it = [];

  const fetchData = async () => {
    if (asked) return;
    const res = await axios
      .get("http://localhost:5000/api/v1/post/")
      .then(async (responseP) => {
        console.log(responseP.data);
        setAsked(1);
        setPosts(responseP.data);

        for (const [index, value] of responseP.data.entries()) {
          let username = "";
          const res = await axios
            .get("http://localhost:5000/api/v1/user/id/" + value.userId)
            .then((res) => {
              console.log(res.data);
              username = res.data.username;
              it.push(
                <div className="gallery-item" tabIndex={0} key={value.id}>
                  <Link to={"/post/" + username + "/" + value.id}>
                    <img src={value.url} className="gallery-image" alt="" />
                    <div className="gallery-item-type">
                      <span className="visually-hidden">Gallery</span>
                      <i className="fas fa-clone" aria-hidden="true" />
                    </div>
                    <div className="feed__image-overlay--base">
                      {value.description}
                    </div>
                  </Link>
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

  const project = () => {
    if (!asked2) {
      fetchData();
      setAsked2(1);
    }
    if (true) {
      return (
        <div className="perfilFont">
          <header></header>
          <main>
            <div className="container">
              <div className="gallery">{items}</div>
              {/* End of gallery */}
              <div className="loader" />
            </div>
            {/* End of container */}
          </main>
        </div>
      );
    } else {
      return (
        <div className="perfilFont">
          <header>
            <h1 className="App">Usuario no existe</h1>
          </header>
        </div>
      );
    }
  };

  return project();
}
