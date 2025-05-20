// import css from "./MovieReviews.module.css"

import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTlmNjE3MzZkNjAwMmZhMzcyNDFkNTZhMDJhN2JhMCIsIm5iZiI6MTc0NzQxNDM1OC4zNiwic3ViIjoiNjgyNzZkNTZhYTBhMmMxNjI0NGI1YzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5P9P74K3pPRYuTSR8WUC6p_MiEuSnC_52AZzGPOQHHM";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchMovieReviews = async () => {
        try {
            const response = await axios.get(`/movie/${movieId}/reviews`, {
                headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });
            setReviews(response.data.results);
          } catch (error) {
            console.error(error);
          }
          finally {
            setLoading(false)
          }
    };
    fetchMovieReviews();
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