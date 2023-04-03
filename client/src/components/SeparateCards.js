import React from "react";
// import { img_300, unavailable } from "../../config/config";
import "./SeparateCards.css";

const SeparateCards = ({ poster, title, media_type, id }) => {
  //make sure it displays it the same for all future components
  // used in top20/ trending/ series/movies

  // const posterURL = `https://image.tmdb.org/t/p/w300/`;

  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="card" style={{ width: "15rem" }} key={id}>
            <img
              className="card-img-top"
              src={poster}
              alt="This is a movie poster"
            />
            <div className="card-body">
              <p className="card-text">{title}</p>
              {/* without if statement it's showint tv for tv series which is confusing */}
              <p>{media_type === "tv" ? "TV Series" : "Movie"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparateCards;
