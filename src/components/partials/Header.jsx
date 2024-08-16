import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [hero, setHero] = useState("");

  const getHeader = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let num = Math.floor((Math.random() * Math.abs(data.results.length -1)));
      console.log(num);
      setHero(data.results[num]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(hero);

  useEffect(() => {
    getHeader();
  }, []);

  return (
    <>
      <div
        className="w-full mt-4 h-[60vh] bg-gradient-to-r from-gray-800 to-gray-200 relative tracking-[.25em]"
        style={{
          backgroundImage: `url(${`https://image.tmdb.org/t/p/original${
            // @ts-ignore
            hero.poster_path || hero.backdrop_path
          }`})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top right",
          // borderImage : "fill 1 black",
        }}
      >
        <div className="absolute bottom-10 -z-0 font-extrabold left-6 text-xl  text-zinc-50 ">
          <h1 className="text-3xl mb-2 uppercase bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-200">
            {hero.name || hero.
// @ts-ignore
            title }
          </h1>
          <span>
            <i class="ri-rocket-2-fill text-orange-400"></i>
            {hero.release_date || hero.first_air_date}
          </span>
          <br />
          <span className="underline">
            <i class="ri-tv-line text-orange-400 "></i>
            {hero.media_type}
          </span>
        </div>
      </div>
    </>
  );
}
