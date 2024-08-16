// @ts-nocheck
import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Link } from "react-router-dom";

export default function ContentBar() {
  const [query, setQuery] = useState("");
  const [searchQ, setSearchQ] = useState([]);
  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      setSearchQ(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <>
      <div className="flex justify-start  items-center text-2xl gap-1 relative">
        <label htmlFor="find">
          <i className="ri-search-eye-line"></i>
        </label>
        <input
          type="text"
          id="find"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Enter a Query"
          className="text-xl p-2 w-[60%] bg-[#1F1E24;] text-zinc-300 outline-none border-none font-semibold"
        />
        {query.length > 0 ? (
          <i
            className="ri-close-line text-2xl cursor-pointer"
            onClick={() => {
              setQuery("");
              setSearchQ([]);
            }}
          ></i>
        ) : (
          ""
        )}

        <div className="absolute z-10 top-[100%] left-1 w-[60%] ml-6 max-h-[30vh] bg-zinc-500 text-zinc-200 overflow-auto">
          {searchQ?.map((s, i) => (
            <Link
              key={i}
              className="flex shadow-lg shadow-black justify-start items-center gap-2 text-lg p-2 border-b-2 border-zinc-900 "
            >
              <img
                className="w-[10%] shadow-md shadow-zinc-800"
                src={`https://image.tmdb.org/t/p/original${
                  s.poster_path || s.backdrop_path
                }`}
                alt=""
              />
              <span className="font-bold ">{s.name || s.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>{}</div>
    </>
  );
}
