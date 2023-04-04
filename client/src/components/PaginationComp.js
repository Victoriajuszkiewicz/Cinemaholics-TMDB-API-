import React from "react";
import { Pagination } from "@mui/material";
import "./PaginationComp.css";

const PaginationComp = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
    console.log(page);
  };

  return (
    <div
      className="container"
      id="paginationstyle"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Pagination
        className="paginationtext"
        sx={{ button: { color: "#ffffff" } }}
        color="primary"
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
};

export default PaginationComp;
