import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Footer() {


	const [fetched, setFetched] = useState("");
	const [version, setVersion] = useState("");


	useEffect(() => {
		if (fetched !== "connected") {
		  axios
			.get(`https://fitswapbackend.herokuapp.com/api/v1/version`)
			.then((res) => {
			  setVersion(res.data);
			  setFetched("connected");
			  console.log(fetched);
			});
		}
	  }, [fetched]);
	

  return (
    <div className={"footer__container--base"}>
      <div className="footer__content--base">Version: {version}</div>
    </div>
  );
}
