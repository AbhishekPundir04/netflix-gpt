import React from 'react'
import { Images_Url } from '../utils/constant'
const MovieCard = ({posterPath}) => {
    
  return (
    <div className='w-44'>
        <img src={Images_Url + posterPath} alt="card_images"/>
    </div>
  )
}

export default MovieCard