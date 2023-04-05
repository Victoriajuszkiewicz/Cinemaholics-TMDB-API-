import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SeparateCards from "../../components/SeparateCards.js";
import PaginationComp from "../../components/PaginationComp.js";

const Series = () => {
  const [series, setSeries] = useState([]);
  const posterURL = `https://image.tmdb.org/t/p/w300/`;
  //current page
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setSeries(data.results);
    setNumOfPages(data.total_pages);
    // console.log(data);
  };
  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <div className="container">
        <h2>Tv series</h2>
      </div>
      <div className="container">
        <div className="row gy-3">
          {series &&
            series.map((m) => (
              <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                <SeparateCards
                  poster={posterURL + m.poster_path}
                  title={m.title || m.name}
                  // media_type="tv"
                  id={m.id}
                />
              </div>
            ))}
        </div>
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

export default Series;
