// import css from "./HomePage.module.css"
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTlmNjE3MzZkNjAwMmZhMzcyNDFkNTZhMDJhN2JhMCIsIm5iZiI6MTc0NzQxNDM1OC4zNiwic3ViIjoiNjgyNzZkNTZhYTBhMmMxNjI0NGI1YzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5P9P74K3pPRYuTSR8WUC6p_MiEuSnC_52AZzGPOQHHM";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true)
    const fetchTrendingMovies = async () => {
        try {
            const response = await axios.get("/movie/popular?language=en-US&page=1", {
                headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });
        setMovies(response.data.results || []);
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    };

    fetchTrendingMovies();
    }, []);

    return (
        <div>
            {loading && <RiseLoader />}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}