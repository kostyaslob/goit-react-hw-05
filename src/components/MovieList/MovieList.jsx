// import css from "./MovieList.module.css"
import { Link } from 'react-router-dom';

export default function MovieList({ movies } ) {
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}