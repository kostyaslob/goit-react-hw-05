import css from "./MovieDetailsPage.module.css"
import { NavLink, Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

import {fetchMovieDetailsPage} from "../../services/movies-api.js"

export default function MovieDetailsPage() {
    const location = useLocation();
    const backlinkRef = useRef(location.state)
    const { movieId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
    async function fetchDetails() {
        try {
            const data = await fetchMovieDetailsPage(movieId)
            setDetails(data);
        } catch (error) {
            console.error(error);
        }
    };
    fetchDetails();
    }, [movieId]);    

    return (     
        <div>
            <Link className={css.backButton} to={backlinkRef.current ? backlinkRef.current : "/movies"}>Go Back</Link>   
            
            {details && (
                <div className={css.details}>
                    <img className={css.imageDetails} src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt={details.title}/>
                    <div className={css.movieDetails}>
                        <h2>{details.title} ({details.release_date?.slice(0, 4)})</h2>
                        <p>Users score: {details.vote_average} %</p>
                        <h3>Overview</h3>
                        <p>{details.overview}</p>
                        <h4>Genres</h4>
                        <p>{details.genres?.map(genre => genre.name).join(", ")}</p>
                    </div>
                </div>
            )}
                <div className={css.info}>
                    <h4>Additional Information</h4>
                    <ul className={css.infoList}>
                        <li>
                            <NavLink className={css.linksDetails} to="cast">Cast</NavLink>
                        </li>
                        <li>
                            <NavLink className={css.linksDetails} to="reviews">Reviews</NavLink>
                        </li>
                    </ul>
                    <Outlet />
                </div>
        </div>
    )
}