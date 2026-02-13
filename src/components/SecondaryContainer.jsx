import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import useTopRatedMovies from '../hooks/useTopRatedMovies'


const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies)
    // console.log(movies.nowPlayingMovies)
    useTopRatedMovies()

  return (<>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.topRated}/>
    {/* <MovieList title={"Recent"} movies={useTopRatedMovies}/> */}
  </>
  )
}

export default SecondaryContainer