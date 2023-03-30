import React from "react";
// import { img_300, unavailable } from "../../config/config";

const SeparateCards = ({ poster, title, media_type, id }) => {
  //pass fetched data from API
  //.some.map then <SeparateCard>?
  //once the data passed how do we want to display it?
  //make sure it displays it the same for all future components
  // used in top20/ trending/ series/movies
  // const posterURL = `https://image.tmdb.org/t/p/w300/`;

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }} key={id}>
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
  );
};

export default SeparateCards;
