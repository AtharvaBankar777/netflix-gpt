
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies"


const Browse = () => {
  useNowPlayingMovies();
  

  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse