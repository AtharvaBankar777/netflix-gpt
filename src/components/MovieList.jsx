import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  if (!movies) return null;

  return (
    <div className="px-6 py-4 text-white">
      
      <h1 className="text-2xl font-bold mb-4">
        {title}
      </h1>

      <div className="flex overflow-x-scroll no-scrollbar space-x-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>

    </div>
  )
}

export default MovieList
