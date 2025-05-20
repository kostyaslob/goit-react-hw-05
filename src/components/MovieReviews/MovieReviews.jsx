// import css from "./MovieReviews.module.css"

import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import {fetchMovieReviews} from "../../services/movies-api.js"

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
        try {
          setLoading(true);
          const data = await fetchMovieReviews(movieId)

          setReviews(data.results);
          } catch (error) {
            console.error(error);
          }
          finally {
            setLoading(false)
          }
    };
    fetchReviews();
    }, [movieId]);            

    if (reviews.length === 0) {
        return <p>We don't have any reviews for this movie.</p>;
    }

    return (
      <div>
        {loading && <RiseLoader />}
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}
