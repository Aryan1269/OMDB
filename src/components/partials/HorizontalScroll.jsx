import React, { useState } from "react";
import DropDown from "./DropDown";

export default function HorizontalScroll({ data }) {
  return (
    <>
      <div className="w-100% py-3 px-2 flex items-start justify-start gap-3 overflow-auto">
        {data &&
          data.map((d, i) => {
            return (
              <section key={i} className="min-w-[20%] p-2 rounded-lg overflow-hidden shadow-md shadow-gray-400 h-[300px] mb-4 flex-grow">
                <img
                  className="h-[50%] w-full rounded-lg object-cover object-top aspect-square"
                  src={`https://image.tmdb.org/t/p/original${
                    d.poster_path || d.backdrop_path
                  }`}
                  alt="movieData"
                />
                <p className="font-bold text-zinc-400">{d.title || d.name}</p>
                <p className="h-1">{d.overview.slice(0, 100) + "..."} </p>
              </section>
            );
          })}
      </div>
    </>
  );
}
