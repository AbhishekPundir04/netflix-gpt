import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS)
        const json = await data.json();
        console.log(json.result)
        dispatch(addNowPlayingMovies(json))
      }
    
      const {nowPlayingMovies} = useSelector((store)=>store.movies)
      console.log(nowPlayingMovies,"nowPlayingMovies")
      useEffect(() => {
        getNowPlayingMovies()
      }, [])
  return (
    <div>

   
  </div>
  )
}

export default useNowPlayingMovies