import Image from "next/image";
import Header from "@/components/Header";

export default async function Movie({params}) {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        }
      };
    

    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`, options);
    const movie = await response.json();

    return(
        <>
        <Header/>
        <div className="movie-container">
            <h1>{movie.title}</h1>
            <Image  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width={320} height={500}/>
            <p className="overview">{movie.overview}</p>
            <p>Release date: <strong>{movie.release_date}</strong></p>
            <p>Popularity: <strong>{movie.popularity}</strong></p>
            <p>Vote count: <strong>{movie.vote_count}</strong> </p>
            <p>Vote average: <strong>{movie.vote_average}</strong></p>
        </div>
        </>
    );
}