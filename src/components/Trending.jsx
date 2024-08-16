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
  const [Trends, setTrends] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getHeader = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrends((prev) => [...prev, ...data.results]);
        setPage(page + 1);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const omdb = ()=>{
    const data = axios.get(
      "https://www.omdbapi.com/?s=deadpool&apikey=ce5869da"
    );
  }

  console.log(Trends.length);

  const refreshHandler = async () => {
    if (Trends.length === 0) {
      await getHeader();
    } else {
      setTrends([]);
      setPage(1);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  const navigate = useNavigate();

  return Trends.length > 0 ? (
    <>
      <div className="p-8 w-screen h-screen ">
        <div className=" px-[5%] w-full flex items-center justify-between gap-2">
          <h1 className="mx-auto my-0 border-red-100 border">Trending </h1>
          <SearchBar />
          <DropDown
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <DropDown
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>

        <InfiniteScroll
          dataLength={Trends.length}
          next={() => {
            console.log("Next prop called");
            hasMore && getHeader();
          }}
          hasMore={hasMore}
          loader={<h2>Loading</h2>}
          scrollThreshold="200px"
        >
          <Vertical data={Trends} />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loader />
  );
}
