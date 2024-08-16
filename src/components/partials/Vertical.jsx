import React from "react";
import { Link } from "react-router-dom";

export default function Vertical({ data }) {
  console.log(data);
  return (
    <div className="flex flex-wrap w-full h-[50vh] bg-[#1F1E24] overflow-y-auto">
      {data.map((d, i) => {
        return (
          <Link
            to={""}
            className="w-[25vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mr-[5%] mb-[5%]"
            key={i}
          >
            <img
              className="h-[40vh] object-cover"
              src={`https://image.tmdb.org/t/p/original${
                d.poster_path || d.backdrop_path
              }`}
              alt=""
            />
            <h1>{d.title || d.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}
