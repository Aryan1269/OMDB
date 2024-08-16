import React from "react";

export default function Vertical({ trends }) {
  console.log(trends);
  return (
    <>
      <div className="flex gap-2 items-start flex-wrap w-screen h-screen justify-start">
        {trends &&
          trends.map((t, i) => (
            <div className="shadow-md w-[15%]  rounded-lg  bg-white p-1 ">
              <img
                className="w-full h-[300px] rounded-lg object-cover object-top "
                src={`https://image.tmdb.org/t/p/original${
                  t.poster_path || t.backdrop_path
                }`}
                alt="Image description"
              />
            </div>
          ))}
      </div>
    </>
  );
}
