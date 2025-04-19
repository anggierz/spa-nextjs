"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [query, setQuery] = useState("");

  async function fetchMovieByTitle(title) {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      debugger;
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movie: ", error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = () => {
    console.log(query);
    setLoading(true);
    setError(null);

    if (!query) setError("Please, enter a valid search term.");

    fetchMovieByTitle(query);
  };

  return (
    <div>
      <Header />
      <h1>Search</h1>
      <p>Search for a movie.</p>
      <div className="search-container">
        <input
          type="search"
          id="site-search"
          name="q"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="search-button"
          disabled={loading}
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {movies.length == 0 && !loading && !error && <p>No movies found.</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="container">
        {movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id} className="nav-link">
            <div className="movie" key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
                Release date: <strong>{movie.release_date}</strong>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
