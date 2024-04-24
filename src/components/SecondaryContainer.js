import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
console.log("movies",movies)
  return (
    movies.nowPlayingMovies &&<div className='bg-zinc-900 relative'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies?.popularMoviesData}/>

    </div>
  )
}

export default SecondaryContainer