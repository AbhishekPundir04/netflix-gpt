import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addNowPlayingMovies, addPopularMovies } from '../utils/movieSlice'

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)
        const json = await data.json();
        console.log(json.result)
        dispatch(addPopularMovies(json))
      }
    
      useEffect(() => {
        getNowPlayingMovies()
      }, [])
  return (
    <div>

   
  </div>
  )
}

export default usePopularMovies