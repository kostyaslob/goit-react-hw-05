import css from "./MovieCast.module.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import { fetchMovieCast } from "../../services/movies-api.js"


export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCast() {
        try {
          setLoading(true);
          const data = await fetchMovieCast(movieId)

            setCast(data.cast);
          } catch (error) {
            console.error(error);
          }
          finally {
            setLoading(false)
         }
    };
    fetchCast();
    }, [movieId]);

  return (
    
    <div>
      {loading && <RiseLoader />}
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
    </div>
    )
}