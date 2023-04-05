import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
// import { response } from "express";
import SeparateCards from "../../components/SeparateCards.js";

const Homepage = () => {
  const [page, setPage] = useState(1);
  const [trending, setTrending] = useState([]);
  //poster is only saved by uncomplete path /1234567876t5r4e
  const posterURL = `https://image.tmdb.org/t/p/w300/`;
  const bigposterURL = `https://image.tmdb.org/t/p/original/`;

  // fetching data from API (trending only)
  const fetchTrending = async () => {
    //we will get everything in form of a data variable
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(data);
    setTrending(data.results);
  };

  // not working until we call the function
  useEffect(() => {
    fetchTrending();
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
                className={`carousel-item ${index === 0 && "active"}`}
              >
                <img
                  className="d-block w-100"
                  src={bigposterURL + o.backdrop_path || o.poster.path}
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>{o.title || o.name}</h5>
                  <p className="singlep">{o.overview}</p>
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
          <div className="row gy-3">
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
      </div>
    </div>
  );
};

export default Homepage;
