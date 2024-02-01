import { getMovies } from "@/helpers/movieFunctions";
import React from "react";

const Movies = async () => {
  const movies = await getMovies("now_playing");
  return <></>;
};

export default Movies;
