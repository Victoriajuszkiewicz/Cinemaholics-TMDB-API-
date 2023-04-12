import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
// import { response } from "express";
import SeparateCards from "../../components/SeparateCards.js";

const Homepage = () => {
	const [page, setPage] = useState(1);
	const [trending, setTrending] = useState([]);
	const [upcoming, setUpcoming] = useState([]);
	const [actors, setActors] = useState([]);
	//poster is only saved by uncomplete path /1234567876t5r4e
	const posterURL = `https://image.tmdb.org/t/p/w300/`;
	const bigposterURL = `https://image.tmdb.org/t/p/original/`;

	// fetching data from API (trending only)
	const fetchTrending = async () => {
		//we will get everything in form of a data variable
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
		);
		setTrending(data.results);
	};
	//

	const fetchUpcoming = async () => {
		//we will get everything in form of a data variable
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		// console.log(data);
		setUpcoming(data.results);
	};

	const fetchActors = async () => {
		//we will get everything in form of a data variable
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_API_KEY}&page=1`
		);

		setActors(data.results);
	};

	// not working until we call the function
	useEffect(() => {
		fetchTrending();
		fetchUpcoming();
		fetchActors();
	}, [page]);

	return (
		<div>
			<div className="topmovies">
				{/* ----This is a carousel(using bootstrap)----- */}
				<div id="carouselExample" className="carousel slide">
					<div className="carousel-inner">
						{trending.slice(0, 5).map((o, index) => (
							<div
								key={o.id}
								// {{className="col-sm" || "col"? style={height:300}:style={height:500} }}
								className={`carousel-item ${index === 0 && "active"}`}
							>
								<img
									className="d-block w-100"
									src={bigposterURL + o.backdrop_path || o.poster.path}
								></img>
								<div className="carousel-caption">
									<h3 className="carouseltitle">{o.title || o.name}</h3>

									<p className="d-none d-md-block">{o.overview}</p>
								</div>
							</div>
						))}
					</div>

					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExample"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExample"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="container">
					<h2>Trending this week</h2>
				</div>
				{/* className="alllmoviesgrid" */}
				<div className="container">
					<div className="row ">
						{trending &&
							trending.slice(0, 18).map((c) => (
								<div className="col-12 col-sm-12 col-md-4 col-lg-2">
									<SeparateCards
										poster={posterURL + c.poster_path}
										title={c.title || c.name}
										media_type={c.media_type}
										id={c.id}
										key={c.id}
									/>
								</div>
							))}
					</div>
				</div>
				<div>
					<div className="container">
						<h2>Upcoming movies</h2>
					</div>
					<div className="container">
						<div className="row ">
							{upcoming &&
								upcoming.slice(0, 18).map((u) => (
									<div className="col-12 col-sm-12 col-md-4 col-lg-2">
										<SeparateCards
											title={u.title || u.name}
											id={u.id}
											poster={posterURL + u.poster_path}
										/>
									</div>
								))}
						</div>
					</div>
				</div>

				<div>
					<div className="container">
						<h2>Popular people</h2>
					</div>
					<div className="container">
						<div className="row ">
							{actors &&
								actors.slice(0, 18).map((a) => (
									<div className="col-12 col-sm-12 col-md-4 col-lg-2">
										<SeparateCards
											// title={a.title || a.name}
											id={a.id}
											poster={posterURL + a.profile_path}
										/>
										<div className="card-body  bg-dark text-white">
											<p className="card-text">{a.title || a.name}</p>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
