import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import SeparateCards from "../../components/SeparateCards.js";
import PaginationComp from "../../components/PaginationComp.js";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const [movies, setMovies] = useState([]);
  const posterURL = `https://image.tmdb.org/t/p/w300/`;

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setMovies(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <div className="alllmoviesgrid">
        {movies &&
          movies.map((m) => (
            <SeparateCards
              poster={posterURL + m.poster_path}
              title={m.title || m.name}
              // media_type="movie"
              id={m.id}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <PaginationComp
          setPage={setPage}
          numOfPages={numOfPages}
          onPageChange={(page) => setPage(page)}
        />
      )}
    </div>
  );
};

export default Movies;
