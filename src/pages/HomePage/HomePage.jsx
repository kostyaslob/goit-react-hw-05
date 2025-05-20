// import css from "./HomePage.module.css"
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import MovieList from "../../components/MovieList/MovieList";
import {fetchTrendingMovies} from "../../services/movies-api.js"

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {    
        async function fetchData() {
            try {
                setLoading(true);
                const data = await fetchTrendingMovies();
                    
                setMovies(data.results || []);
                } catch (error) {
                    console.error(error);
                }
                finally {
                    setLoading(false)
                }
        };
        fetchData();
        }, []);

    return (
        <div>
            {loading && <RiseLoader />}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}