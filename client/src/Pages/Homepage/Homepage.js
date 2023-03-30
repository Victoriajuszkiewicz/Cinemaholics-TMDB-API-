import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { response } from "express";
import SeparateCards from "../../components/SeparateCards.js";

const Homepage = () => {
  const [page, setPage] = useState(1);
  const [trending, setTrending] = useState([]);

  let REACT_APP_API_KEY = "478603fe0dca8af9e15ac989cbcf68ee";

  // fetch data from API
  const fetchTrending = async () => {
    //we will get everything in form of a data variable
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${REACT_APP_API_KEY}&page=${page}`
    );
    console.log(data);
    setTrending(data.results);
  };

  // not working until we call the function
  useEffect(() => {
    fetchTrending();
  }, [page]);
  //poster is only saved by uncomplete path /1234567876t5r4e
  const posterURL = `https://image.tmdb.org/t/p/w300/`;

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <div className="topmovies">
        {/* displaying trending movies here */}
        <h2>Top 20 this week</h2>
        {trending &&
          trending
            .slice(0, 20)
            .map((c) => (
              <SeparateCards
                poster={posterURL + c.poster_path}
                title={c.title || c.name}
                media_type={c.media_type}
                id={c.id}
                key={c.id}
              />
            ))}
        {/* {trending &&
          trending.map((c) => (
            <SeparateCards
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              media_type={c.media_type}
            />
          ))} */}
        {/* <div className="cardthingy">
          {trending &&
            trending.slice(0, 20).map((c) => (
              <div>
                <img
                  src={posterURL + c.poster_path}
                  alt="this is a poster for a movie"
                ></img>
                <h2>{c.title}</h2>
                <p>{c.media_type}</p>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;
