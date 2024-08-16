import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Trending from "./components/Trending";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#1F1E24] p-2 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
