import css from "./MovieCast.module.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTlmNjE3MzZkNjAwMmZhMzcyNDFkNTZhMDJhN2JhMCIsIm5iZiI6MTc0NzQxNDM1OC4zNiwic3ViIjoiNjgyNzZkNTZhYTBhMmMxNjI0NGI1YzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5P9P74K3pPRYuTSR8WUC6p_MiEuSnC_52AZzGPOQHHM";

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
    const fetchMovieCast = async () => {
        try {
            const response = await axios.get(`/movie/${movieId}/credits`, {
                headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });
            setCast(response.data.cast);
        } catch (error) {
            console.error(error);
        }
    };
    fetchMovieCast();
    }, [movieId]);

    return (
    <ul className={css.movieList}>
      {cast.map(actor => (
        <li className={css.movieItem} key={actor.id}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width={100}
              className={css.img}
            />
          ) : (
            <div className={css.noimage}>
              <span>No image</span>
            </div>
          )}
          <h4>{actor.name}</h4>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
    )
}