// import css from "./MovieList.module.css"

export default function MovieList({ movies } ) {
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <a href="">{movie.title}</a>
                    </li>
                )
            })}
        </ul>
    )
}