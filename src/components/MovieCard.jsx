import React from 'react'

const MovieCard = ({ posterPath, title }) => {

  if (!posterPath) return null;

  const imageUrl = "https://image.tmdb.org/t/p/w500" + posterPath;

  return (
    <div className="min-w-[200px] cursor-pointer transform transition duration-300 hover:scale-110">
      
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg shadow-lg"
      />

    </div>
  )
}

export default MovieCard
