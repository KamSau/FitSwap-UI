import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function UserProfile({}) {
	const [perfil, setPerfil] = useState([]);
	const [asked, setAsked] = useState(0);
	let { username } = useParams();
	const fetchData = async () => {
		if(asked) return;
	const res = await axios.get("http://localhost:8090/api/v1/user/"+username).then((response) => {
		console.log(response.data);
		setAsked(1);
		setPerfil(response.data);

	}).catch((error) => {
        console.log(error);
		console.log("No existe");	


    });
	}


	
	


	const project = () => {
		fetchData();
			if(perfil.username){
				return (
					<div className="perfilFont">
					<header>
					  <div className="container">
						<div className="profile">
						  <div className="profile-image">
							<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
						  </div>
						  <div className="profile-user-settings">
							<h1 className="profile-user-name">{perfil.username}</h1>
							<button className="btn profile-edit-btn">Edit Profile</button>
							<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true" /></button>
						  </div>
						  <div className="profile-stats">
							<ul>
							  <li><span className="profile-stat-count">0</span> posts</li>
							  <li><span className="profile-stat-count">0</span> followers</li>
							  <li><span className="profile-stat-count">0</span> following</li>
							</ul>
						  </div>
						  <div className="profile-bio">
				<p><span className="profile-real-name">{perfil.name} {perfil.middleName} {perfil.lastName}</span> {perfil.description}</p>
						  </div>
						</div>
						{/* End of profile section */}
					  </div>
					  {/* End of container */}
					</header>
					<main>
					  <div className="container">
						<div className="gallery">
						  <div className="gallery-item" tabIndex={0}>
							<img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-type">
							  <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
							</div>
							<div className="gallery-item-info">
							  <ul>
								<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 52</li>
								<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 4</li>
							  </ul>
							</div>
						  </div>
						  <div className="gallery-item" tabIndex={0}>
							<img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-info">
							  <ul>
								<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 66</li>
								<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 2</li>
							  </ul>
							</div>
						  </div>
						  <div className="gallery-item" tabIndex={0}>
							<img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-type">
							  <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
							</div>
							<div className="gallery-item-info">
							  <ul>
								<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 45</li>
								<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 0</li>
							  </ul>
							</div>
						  </div>
						  <div className="gallery-item" tabIndex={0}>
							<img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-info">
							  <ul>
								<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 34</li>
								<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 1</li>
							  </ul>
							</div>
						  </div>
						  <div className="gallery-item" tabIndex={0}>
							<img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-info">
							  <ul>
								<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 41</li>
								<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 0</li>
							  </ul>
							</div>
						  </div>
						  <div className="gallery-item" tabIndex={0}>
							<img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-type">
							  <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true" />
							</div>
							<div className="gallery-item-info">
							  <ul>
								<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 30</li>
								<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 2</li>
							  </ul>
							</div>
						  </div>
						</div>
						{/* End of gallery */}
						<div className="loader" />
					  </div>
					  {/* End of container */}
					</main>
				  </div>
				  );
			}else{
				return (
					<div className="perfilFont">
					<header>
							<h1 className="App">Usuario no existe</h1>
					</header>
				  </div>
				  )
			}
	}



	return (
		project()
	  );


}
