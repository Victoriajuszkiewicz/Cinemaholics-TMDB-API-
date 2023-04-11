import React from "react";
// import { img_300, unavailable } from "../../config/config";
import "./SeparateCards.css";

const SeparateCards = ({ poster, title, media_type, id }) => {
	//make sure it displays it the same for all future components

	// used in trending/series/movies/upcoming/actors

	return (
		<div className="card border-0" style={{ width: "12rem" }} key={id}>
			<img className="card-img-top" src={poster} alt="This is a poster" />
			<button id="buttononrecipe" type="button">
				<i class="bi bi-heart"></i>
			</button>
			{/* <div className="card-body  bg-dark text-white">
				<p className="card-text">{title}</p> */}
			{/* without if statement it's showing tv for tv series which is confusing */}
			{/* <p>{media_type === "tv" ? "TV Series" : "Movie"}</p> */}
			{/* </div> */}
		</div>
	);
};

export default SeparateCards;
