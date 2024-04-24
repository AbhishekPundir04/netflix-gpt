import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GPTSearch from './GptSearch'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  const showGptSearchView = useSelector((store) => store?.gptSlice?.showGptValue)
  console.log(showGptSearchView, "showGptSearchView")
  return (
    <div>
      <Header />
      {showGptSearchView ? (<GPTSearch />)
        :
        (<>
          <MainContainer />
          <SecondaryContainer />
        </>)
      }
    </div>
  )
}

export default Browse