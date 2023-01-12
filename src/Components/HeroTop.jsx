import { useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "./Utils/Spinner";
import MediaCard2 from "../Components/MediaCard2";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

export default function HeroTop({ data, error, loading }) {
  const scrollRef = useRef();
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 1000;
    } else {
      current.scrollLeft += 1000;
    }
  };
  const findMovie = data.filter(
    (accessContent) => accessContent.rating.average >= 5
  );
  console.log(findMovie);
  return (
    <div className="container-lg mx-auto mt-5 align-items-center">
      <Link to="tv shows" target="_Blank" className="fw-2 text-dark">
        <h5>TOP RATED</h5>
      </Link>
      <div className="position-relative">
        <div ref={scrollRef} className="d-flex Hero">
          {loading && <Spinner />}
          {error ||
            (findMovie && (
              <>
                {error && <p>{error.message}</p>}
                {findMovie.map((Comedytv) => (
                  <MediaCard2 key={Comedytv.id} {...Comedytv} />
                ))}
              </>
            ))}
        </div>
        <div
          className="d-none d-md-flex align-items-center justify-content-between w-100 position-absolute"
          style={{ top: "25%" }}
        >
          <IoMdArrowDropleftCircle
            className="text-white"
            size="3.2rem"
            style={{ cursor: "pointer" }}
            onClick={() => scroll("left")}
          />
          <IoMdArrowDroprightCircle
            className="text-white"
            size="3.2rem"
            style={{ cursor: "pointer" }}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}
