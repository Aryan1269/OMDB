import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="w-[20%] h-screen  bg-[#1F1E24] p-4 text-zinc-400 flex flex-col text-lg font-bold">
        <h1 className="font-extrabold text-2xl">
          <i className="ri-tv-fill mr-2 text-[#6556CD] "></i>
          OMDB
        </h1>

        <nav className="flex flex-col ">
          <h3 className=" p-2 mt-4 underline">New Feeds</h3>
          <Link to={"/trending"} className="px-4 py-2 ">
            <i className="ri-fire-fill"></i> Trending
          </Link>
          <Link className="px-4 py-2 ">
            <i className="ri-heart-fill"></i> Popular{" "}
          </Link>
          <Link className="px-4 py-2 ">
            <i className="ri-movie-2-fill"></i> Movies{" "}
          </Link>
          <Link className="px-4 py-2 ">
            <i className="ri-tv-line"></i> Tv Shows{" "}
          </Link>
          <Link className="px-4 py-2 ">
            <i className="ri-group-3-fill"></i> People{" "}
          </Link>
        </nav>

        <hr className="py-2 mt-5  " />

        <nav className="flex flex-col">
          <h3 className=" p-2 mt-2 underline w-[100%]">Website Information</h3>
          <Link className="px-4 py-2  w-fit">
            <i className="ri-information-fill"></i> About OMDB
          </Link>
          <Link className="px-4 py-2 w-fit">
            <i className="ri-phone-fill "></i> Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
