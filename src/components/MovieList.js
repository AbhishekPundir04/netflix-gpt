import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log("okkkkkkkkkkkkkkk", movies);

  return (
    <div className='container mx-auto'>
        <h1 className='text-white pt-4 pb-4 pl-4 font-medium'>{title}</h1>
      <div className='overflow-x-scroll'>
        <div className='flex'>
          <div className='flex'>
          {movies?.results.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
