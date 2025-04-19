import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

async function fetchMovieByTitle(title) {
  if (!title) return [];

  const token = process.env.TMDB_TOKEN;

  try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
    
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options);

      const data = await response.json();
      return data.results;
    }

    catch (err) {
      console.error("Error fetching movie: ", err);
      return [];
    }

  }


export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || "";
  const movies = await fetchMovieByTitle(query);
  const error = query && !movies.length;

  return (
    <div>
      <Header />
      <h1>Search</h1>
      <p>Search for a movie.</p>
      <form className="search-container" method="GET">
        <input type="search" name="q" className="search-input" defaultValue={query} />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {query && (
        <>
          {error ? (
            <p style={{ color: "red" }}>No movies found.</p>) : (
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
                        {
                            movie.overview.length >= 150 ?
                            `${movie.overview.substring(0, 150)}[...]` : movie.overview
                        }
                    </p>
                    <p>Release: {movie.release_date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
