import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {

    const TrailerOne = useSelector(
        (store) => store.movies?.videoTrailer
    );

    useMovieTrailer(movieId);

    if (!TrailerOne) return null;

    return (
     <div className="relative w-full h-screen -z-10 overflow-hidden">
    <iframe
        className="absolute top-0 left-0 w-full h-full -z-1"
        src={`https://www.youtube.com/embed/${TrailerOne.key}?autoplay=1&controls=0`}
        allow="autoplay; encrypted-media"
        allowFullScreen
    />
</div>



    )
}

export default VideoBackground
