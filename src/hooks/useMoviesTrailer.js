import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addMoviesTrailerKey } from '../utils/movieSlice';

const useMoviesTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)

        const json = await data.json()
        console.log("json", json?.results?.[6]?.type)
        const filteredData = json.results.filter((video) => video.type == "Trailer")
        const trailer = filteredData.length === 0 ? filteredData[0] : json.results[0]
        dispatch(addMoviesTrailerKey(trailer))
    }

    useEffect(() => {
        getMovieVideos()
    }, [])
    
    return (
        <div>

        </div>
    )
}

export default useMoviesTrailer