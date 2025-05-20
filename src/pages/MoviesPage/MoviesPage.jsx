// import css from "./MoviesPage.module.css"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import MovieList from "../../components/MovieList/MovieList";
import {fetchMoviewsPage} from "../../services/movies-api.js"

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);    
    const [searchParams, setSearchParams] = useSearchParams();    
    const queryParam = searchParams.get("query") ?? "";
    const [inputValue, setInputValue] = useState(queryParam)

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSearch = () => {
        const nextParams = new URLSearchParams();
        if (inputValue.trim() !== "") {
           nextParams.set("query", inputValue.trim()); 
        }     
        setSearchParams(nextParams);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

    useEffect(() => {    
        if (!queryParam) {
            setMovies([]);
            return;
        }
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await fetchMoviewsPage(queryParam);
                    
                setMovies(data.results || []);
                } catch (error) {
                    console.error(error);
                }
                finally {
                    setLoading(false)
                }
        };
        fetchMovies();
        }, [queryParam]);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown}
                placeholder="Search movies..."
                />
            <button onClick={handleSearch}>Search</button>
            {loading && <RiseLoader color="#fa8072"/>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
}