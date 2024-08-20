import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./components/Loader";

export default function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  // @ts-ignore
  const ytdata = useSelector((state) => state[category].info.videos);
    console.log(ytdata);
  return ytdata ? (
    <>
      <div className="w-full h-screen absolute z-[100] p-1 bg-[rgba(0,0,0,0.92)] top-0 left-0">
        <i
          className="ri-arrow-left-fill w-10 p-2 m-[5%] cursor-pointer text-2xl"
          onClick={() => navigate(-1)}
        ></i>
        <div className="flex items-center justify-center">
          <ReactPlayer
            controls
            height={650}
            width={1000}
            url={`https://www.youtube.com/watch?v=${ytdata?.key}`}
          ></ReactPlayer>
        </div>
      </div>
    </>
  ) : <Loader/>;
}
