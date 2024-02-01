import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";

const Movies = async () => {
  const movies = await getMovies("now_playing");
  return (
    <>
      <HeroSection
        movieId={movies[0].id}
        title={movies[0].title}
        overview={movies[0].overview}
      />
    </>
  );
};

export default Movies;
