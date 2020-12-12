import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { SessionContext } from "../../helpers/SessionContext";

export default function MyProfile({}) {
  const [perfil, setPerfil] = useState([]);
  const [posts, setPosts] = useState([]);
  const [asked, setAsked] = useState(0);
  const [asked2, setAsked2] = useState(0);
  const [items, setItems] = useState([]);
  const { session, setSession } = useContext(SessionContext);
  const it = [];

  let { username } = useParams();

  const fetchData = async () => {
    if (asked) return;
    const res = await axios
      .get("http://localhost:5000/api/v1/user/", {
        headers: { Authorization: "Bearer " + session },
      })
      .then(async (response) => {
        console.log(response.data);
        setAsked(1);
        setPerfil(response.data);

        await axios
          .get("http://localhost:5000/api/v1/post/" + response.data.id)
          .then((responseP) => {
            console.log(responseP.data);
            setAsked(1);
            setPosts(responseP.data);

            for (const [index, value] of responseP.data.entries()) {
              it.push(
                <div className="gallery-item" tabIndex={0} key={value.id}>
                  <Link to={"/post/" + response.data.username + "/" + value.id}>
                    <img src={value.url} className="gallery-image" alt="" />
                    <div className="gallery-item-type">
                      <span className="visually-hidden">Gallery</span>
                      <i className="fas fa-clone" aria-hidden="true" />
                    </div>
                  </Link>
                  <div className="profile__image-description--base">
                    {value.description}
                  </div>
                </div>
              );
            }
            console.log(it);
            setItems(it.reverse());
          })
          .catch((error) => {
            console.log(error);
            console.log("No existen posts");
          });
      })
      .catch((error) => {
        console.log(error);
        console.log("No existe");
      });
  };

  const project = () => {
    if (!asked2) {
      fetchData();
      setAsked2(1);
    }
    if (perfil.username) {
      return (
        <div className="perfilFont">
          <header>
            <div className="container">
              <div className="profile">
                <div className="profile-image">
                  <img src={perfil.img_url} alt="" />
                </div>
                <div className="profile-user-settings">
                  <h1 className="profile-user-name">{perfil.username}</h1>
                  {/*
							<button className="btn profile-edit-btn">Edit Profile</button>
							*/}
                  <button
                    className="btn profile-settings-btn"
                    aria-label="profile settings"
                  >
                    <i className="fas fa-cog" aria-hidden="true" />
                  </button>
                </div>
                {/*
						  <div className="profile-stats">
							<ul>
							  <li><span className="profile-stat-count">0</span> posts</li>
							  <li><span className="profile-stat-count">0</span> followers</li>
							  <li><span className="profile-stat-count">0</span> following</li>
							</ul>
						  </div>
						  */}
                <div className="profile-bio">
                  <p>
                    <span className="profile-real-name">
                      {perfil.name} {perfil.middleName} {perfil.lastName}
                    </span>{" "}
                    {perfil.description}
                  </p>
                </div>
              </div>
              {/* End of profile section */}
            </div>
            {/* End of container */}
          </header>
          <main>
            <div className="container">
              <div className="gallery">{items}</div>
              {/* End of gallery */}
            </div>
            {/* End of container */}
          </main>
        </div>
      );
    } else {
      return (
        <div className="perfilFont">
          <header>
            <div className="loader" />
          </header>
        </div>
      );
    }
  };

  return project();
}
