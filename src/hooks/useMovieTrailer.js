import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constatnt'
import { useDispatch, useSelector } from 'react-redux'
import { addTTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer= (movieId) => {


      // const [trailerId, setTrailerId  ] = useState(null);

    const dispatch = useDispatch();
   const getMovieVideos = async () =>{


    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_OPTIONS);

    const json  = await data.json();

    const filterData = json.results.filter((video => video.type === "Trailer"))
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setTrailerId(trailer.key)
    dispatch(addTTrailerVideo(trailer))
}

useEffect(()=>{getMovieVideos()},[])


}


export default useMovieTrailer;