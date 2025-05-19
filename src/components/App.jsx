// import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import MovieCast from "../components/MovieCast/MovieCast";
// import MovieReviews from "../components/MovieReviews/MovieReviews";

import Navigation from "./Navigation/Navigation";


export default function App() { 
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />  
        </Route>
        <Route path="*" element={<NotFoundPage />} />       */}
      </Routes>
    </div>
  );
}
