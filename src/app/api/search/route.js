export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
  
    if (!query) {
      return Response.json({ results: [] }, { status: 400 });
    }
  
    const token = process.env.TMDB_TOKEN;
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
      return Response.json(data);
    } catch (error) {
      console.error("API fetch failed:", error);
      return Response.json({ error: "Failed to fetch from TMDB" }, { status: 500 });
    }
  }
  