import React, { useEffect } from 'react'
import Header from './Header'

const Browse = () => {

  const getNowPlayingMovies = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&key=43c1540d5733e164ffb01f6f1396c214");
    const json =  data.json();
    console.log("json",json)
  }
  useEffect(()=>{
    getNowPlayingMovies()
  },[])
 
  return (
    <div>
      <Header />
   
    </div>
  )
}

export default Browse