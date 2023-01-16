import React from "react";
import { Container } from "react-bootstrap";

export default function HeroComponent() {
  return (
    <div className="parent-div" style={{ padding: "5rem"}}>
      <Container className="mx-auto text-center mt-5  ">
        <h6 className="fw-bold" style={{ color: "#a1a1a1" }}>
          MUST SEE TV SHOWS, NOW STREAMING
        </h6>
        <div>
        <p className="mb-4 fs-5 w-30 mx-auto text-white font-bold fw-light ">
          View thousand of shows and see details about your favorite tv shows
          and people
        </p>
        </div>
        <a
          href="https://www.tvamaze.com"
          rel="noreferrer"
          className="fw-bold text-dark p-3 bg-white mt-4 rounded-4 text-uppercase"
        >
       find out more
    
        </a>
      </Container>
    </div>
  );
}