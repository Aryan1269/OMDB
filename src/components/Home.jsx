import React, { useEffect, useState } from "react";
import SideBar from "./partials/SideBar";
import SearchBar from "./partials/SearchBar";
import HorizontalScroll from "./partials/HorizontalScroll";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import DropDown from "./partials/DropDown";

const Home = () => {
  const [Trends, setTrends] = useState("");
  const [category, setCategory] = useState("all");

  console.log(category);

  const getHeader = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrends(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeader();
  }, [category]);

  document.title = "MD | HomePage";
  return (
    <>
      <div className="flex  justify-between   bg-[#1F1E24] w-screen min-h-screen">
        <SideBar />
        <div className="w-[79%] h-[100%] mb-4  text-zinc-400 ">
          <SearchBar />
          <Header />
          <div className="flex mt-4 items-center justify-between mr-10 mb-2">
            <h1 className="px-6  text-3xl text-zinc-200 font-semibold">
              Trending
            </h1>
            <DropDown
              options={["all", "tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <HorizontalScroll data={Trends} />
        </div>
      </div>
    </>
  );
};

export default Home;
