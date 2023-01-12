import React from "react";
import { Link } from "react-router-dom";

export default function MediaCard2({ id, image, genres, name }) {
  return (
    <div>
      <Link to={`/tvshows/${id}`}>
        <div
          className="me-4 border-outline-dark "
          style={{ width: "260px", height: "170px " }}
        >
          <img
            className="w-100 h-100 rounded-3"
            src={image.original}
            alt={name}
            loading="lazy"
          />
        </div>
          
      </Link>
      <div className="w-100">
        <Link to={`/tvshows/${id}`}>
          <>
            <p className="fw-bold text-dark mb-0">{name}</p>
            <p className="text-dark">{genres.join("  -  ")}</p>
          </>
        </Link>
      </div>
    </div>
  );
}
