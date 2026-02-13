import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { videoTrailer } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/840464/videos?language=en-US', API_OPTIONS)
        const json = await data.json()

        const filterData = json.results.filter((x) => {
            return x.type == "Trailer";
        })
        const Trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(Trailer)

        dispatch(videoTrailer(Trailer));

    }
    useEffect(() => {
        
        
            getVideo();
        
    }, [movieId]);
  return (
    <>
    <h1>hi</h1>
    </>
  )
}

export default useMovieTrailer