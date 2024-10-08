import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./partials/SearchBar";
// @ts-ignore
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";

import React from "react";
import Loader from "./Loader";

const Trending = () => {
  document.title = "SCSDB | Trending";
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        // @ts-ignore
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" px-[5%] py-5 w-full flex items-center  ">
        <h1 className=" text-2xl font-semibold mr-auto text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <SearchBar />
          <Dropdown
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

   
        <Cards data={trending} title={category} />
     
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
