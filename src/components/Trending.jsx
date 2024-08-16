import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "./partials/DropDown";
import SearchBar from "./partials/SearchBar";
import Vertical from "./partials/Vertical";
import axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

export default function Trending() {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [Trends, setTrends] = useState("");

  console.log(category);

  const getHeader = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);

      setTrends(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeader();
  }, [category, duration]);

  const navigate = useNavigate();

  return (
    <>
      <div className="text-zinc-100">
        <header className="flex w-full gap-2 items-center p-2 justify-between">
          <h1 className="text-xl">
            {" "}
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-xl cursor-pointer"
            ></i>
            {"   "}
            {"   "} Trending
          </h1>
          <div className=" ml-[30%] flex-grow">
            <SearchBar />
          </div>
          <div className="flex-grow">
            <DropDown
              options={["all", "tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />{" "}
            <DropDown
              options={["week", "day"]}
              func={(e) => setDuration(e.target.value)}
            />
          </div>
        </header>
        <InfiniteScroll
          next={getHeader}
          hasMore={true}      
          loader={<Loader/>}
          dataLength={Trends.length}
        >
          <Vertical trends={Trends} />
        </InfiniteScroll>
      </div>
    </>
  );
}
