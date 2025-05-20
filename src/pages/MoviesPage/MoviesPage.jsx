// import css from "./MoviesPage.module.css"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import MovieList from "../../components/MovieList/MovieList";
import {fetchMoviewsPage} from "../../services/movies-api.js"
import { useDebounce } from 'use-debounce';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const [debouncedQuery] = useDebounce(query, 300)

    const changeSearchQuery = (event) => {
        const newQuery = event.target.value;
        const nextSearchParams = new URLSearchParams(searchParams);

        if (newQuery !== "") {
           nextSearchParams.set("query", newQuery); 
        } else {
            nextSearchParams.delete("query")
        }        
        setSearchParams(nextSearchParams);
    }

    useEffect(() => {    
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await fetchMoviewsPage();
                    
                setMovies(data.results || []);
                } catch (error) {
                    console.error(error);
                }
                finally {
                    setLoading(false)
                }
        };
        fetchMovies();
        }, [debouncedQuery]);

    return (
        <div>
            <input type="text" value={query} onChange={changeSearchQuery}/>
            {loading && <RiseLoader />}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
}