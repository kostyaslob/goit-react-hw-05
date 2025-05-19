// import css from "./MovieDetailsPage.module.css"
import { Link, Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
    return (
        <div>   
            <p>Additional Information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}