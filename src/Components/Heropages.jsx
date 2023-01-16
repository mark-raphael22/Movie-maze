import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from './Utils/Spinner';
import MediaCard from "../Components/MediaCard";
import {IoMdArrowDropleftCircle,IoMdArrowDroprightCircle}from 'react-icons/io'

export default function Heropages({data, error, loading}) {
  const scrollRef = useRef()
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 1000;
    } else {
      current.scrollLeft += 1000;
    }
  };
  const findMovie = data.filter((accessContent)=> accessContent.type === 'Animation')

  return ( 
    <Container>
      <div className=" container-lg mt-5 py-3 text-uppercase">
        <h2 className="fw-bolder text dark ">TV SHOWS</h2>
      </div>
      <div className="container-lg mx-auto mt-5 align-items-center">
        <Link to="tv shows" target="_Blank" className="fw-2 text-dark">
          <h5>FEATURE TV</h5>
        </Link>
        <div className='position-relative'>
            <div ref={scrollRef} className='d-flex Hero'>
                {loading && <Spinner className='d-flex align-items-center vh-100'/>}
                {error || (findMovie &&(

                <>
                {error && <p>{error.message}</p>}
                {findMovie.map((realitytv)=> (
                <MediaCard key={realitytv.id} {...realitytv} data={data} error={error}loading={loading}/>
                ))}           
                </>
                  ))}
            </div>
            <div className="d-none d-md-flex align-items-center justify-content-between w-100 position-absolute top-50">
            <IoMdArrowDropleftCircle className="text-white" size='3.2rem' style={{cursor:'pointer'}} onClick={()=>scroll('left')}/>
                <IoMdArrowDroprightCircle className="text-white" size='3.2rem' style={{cursor:'pointer'}} onClick={()=>scroll('right')}/>
                </div>
        </div>
      </div>
    </Container>
  );
}