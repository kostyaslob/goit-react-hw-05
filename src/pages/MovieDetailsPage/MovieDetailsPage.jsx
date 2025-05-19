// import css from "./MovieDetailsPage.module.css"
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTlmNjE3MzZkNjAwMmZhMzcyNDFkNTZhMDJhN2JhMCIsIm5iZiI6MTc0NzQxNDM1OC4zNiwic3ViIjoiNjgyNzZkNTZhYTBhMmMxNjI0NGI1YzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5P9P74K3pPRYuTSR8WUC6p_MiEuSnC_52AZzGPOQHHM";

export default function MovieDetailsPage() {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
    const fetchMovieDetailsPage = async () => {
        try {
            const response = await axios.get(`/movie/${movieId}?language=en-US`, {
                headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });
            setDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    fetchMovieDetailsPage();
    }, [movieId]);    

    return (     
        <div>
            <button onClick={() => navigate(-1)}>Go Back</button>   
            
            {details && (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt={details.title}/>
                    <h2>{details.title}</h2>
                    <p>Users score: {details.vote_average} %</p>
                    <h3>Overview</h3>
                    <p>{details.overview}</p>
                    <h3>Genres</h3>
                    <p>{details.genres?.map(genre => genre.name).join(", ")}</p>
                </div>
            )}

            <div>
                <p>Additional Information</p>
                <ul>
                    <li>
                        <NavLink to="cast">Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews">Reviews</NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    )
}