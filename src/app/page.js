import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  const movies = await response.json();

  console.log(movies.results);

  return (
    <>
      <Header />
      <div>
        <h1>Welcome to the MovieDB!</h1>
        <p>Find trending movies below. Click on a movie to see the details:</p>
        <div className="container">
          {movies.results.map((movie) => (
            <Link
              href={`/movie/${movie.id}`}
              key={movie.id}
              className="nav-link"
            >
              <div className="movie" key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={247}
                  height={370}
                />
                <h2>{movie.title}</h2>
                <p>
                  {movie.overview.length >= 150
                    ? `${movie.overview.substring(0, 150)}[...]`
                    : movie.overview}
                </p>
                <p>
                  Release date: <strong> {movie.release_date}</strong>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
