import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Trending from "./components/Trending";
import Tvshows from "./components/TvShows";
import Movie from "./components/Movie";
import Popular from "./components/Popular";
import People from "./components/People";
import MovieDetail from "./components/MovieDetail";
import TvDetail from "./components/TvDetail";
import PeopleDetail from "./components/PeopleDetail";
import Trailer from "./Trailer";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#1F1E24] p-0 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/movie/details/:id" element={<MovieDetail />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/tv" element={<Tvshows />}></Route>
          <Route path="/tv/details/:id" element={<TvDetail />} />
          <Route path="/people" element={<People />}></Route>
          <Route path="/people/details/:id" element={<PeopleDetail />} />
          <Route path="*" element={<Loader/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
