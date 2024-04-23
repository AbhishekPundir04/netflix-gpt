import React from 'react'
import { useSelector } from 'react-redux'
import VideTitle from './VideTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
    console.log("ok", movies)
    console.log("movies", movies?.results?.[0])
    if (!movies) return
    const mainMovie = movies?.results?.[0];
    const { original_title, overview } = mainMovie;
    return (
        <div>
            <VideTitle title={original_title} description={overview} />
            <VideoBackground movieId="823464" />
        </div>
    )
}

export default MainContainer