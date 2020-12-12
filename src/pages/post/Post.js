import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Post({}) {
  const [perfil, setPerfil] = useState({});
  const [actualPost, setActualPost] = useState({});
  const [asked, setAsked] = useState(0);
  const [asked2, setAsked2] = useState(0);
  const [items, setItems] = useState([]);
  const it = [];

  let { username, post } = useParams();

  const fetchData = async () => {
    if (asked) return;
    const res = await axios
      .get("http://localhost:5000/api/v1/user/" + username)
      .then(async (response) => {
        console.log(response.data);
        setAsked(1);
        setPerfil(response.data);
        await axios
          .get("http://localhost:5000/api/v1/post/" + response.data.id)
          .then((responseP) => {
            console.log(responseP.data);
            setAsked2(1);
            setActualPost(responseP.data);
            var arr = responseP.data;
            setActualPost(
              arr.find((i) => {
                return i.id == post;
              })
            );
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
    if (actualPost && actualPost.url) {
      return (
        <div className="feed">
          <section className="username">
            <div className="image">
              <Link to={"/profile/" + username}>
                <img src={perfil.image} />
              </Link>
            </div>
            <div className="id">
              <Link to={"/profile/" + username}>{perfil.username}</Link>
            </div>
          </section>
          <section className="post">
            <img src={actualPost.url} />
          </section>
          <section className="caption">
            <p>
              <Link
                to={"/profile/" + username}
                style={{ textDecoration: "none" }}
              >
                <b className="id">{perfil.username}</b>
              </Link>
            </p>
            <p>
              <b>
                <i>{actualPost.title}</i>
              </b>
            </p>
            <p>{actualPost.description}</p>
          </section>
        </div>
      );
    } else {
      return (
        <div className="perfilFont">
          <div className="loader" />
        </div>
      );
    }
  };

  return project();
}
