import React from 'react'
import HeroProduct from '../Components/Heroproduct'
import Heropages from '../Components/Heropages'
import useFetch from '../Components/Hooks/Usefetch'
import HeroTop from '../Components/HeroTop'


export default function Home() {
    const {data,error,loading}=useFetch('https://api.tvmaze.com/shows?page=1')
        console.log('dib',data);
  return (
    <>
        <HeroProduct/>
       
        <Heropages data={data}error={error}loading={loading}/>
        <HeroTop  data={data}error={error}loading={loading}/>
    </>
  )
}