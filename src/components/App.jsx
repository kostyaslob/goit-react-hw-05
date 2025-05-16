// import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "path/to/pages/HomePage";
import MoviesPage from "path/to/pages/MoviesPage";
import MovieDetailsPage from "path/to/pages/MovieDetailsPage";
import MovieCast from "path/to/pages/MovieCast";
import MovieReviews from "path/to/pages/MovieReviews";
import NotFoundPage from "path/to/pages/NotFoundPage";

export default function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />  
        </Route>
        <Route path="*" element={<NotFoundPage />} />      
      </Routes>
    </div>
  );
}
