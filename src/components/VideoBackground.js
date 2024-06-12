import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addMoviesTrailerKey } from '../utils/movieSlice'
import useMoviesTrailer from '../hooks/useMoviesTrailer'

const VideoBackground = ({movieId}) => {
 console.log("data",movieId)
  const {nowMoviesTrailer} = useSelector((store)=>store?.movies)
  useMoviesTrailer(movieId);

  return (
    <div className=' '>  
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/XeDbyVODQ5M?si=${nowMoviesTrailer?.key} &autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/5ci48K8vITY?si=6eWi4ULUoYlGjjE2&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
  )
}

export default VideoBackground

