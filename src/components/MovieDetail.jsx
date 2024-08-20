import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAsyn, removestate } from "../actions/MoviesAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function MovieDetail() {
  const {pathname} = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  // @ts-ignore
  const { info } = useSelector((s) => s.movie);
  const navigate = useNavigate();


  const suggest = info?.similar || info?.recommendations;


  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    dispatch(getMoviesAsyn(id));

    return () => dispatch(removestate());
  }, []);

  return info ? (
    <>
      <div
        className="text-zinc-100 min-h-screen bg-gradient-to-r from-gray-800 to-gray-200 relative tracking-[.25em]  w-screen relative"
        style={{
          backgroundImage: `url(${`https://image.tmdb.org/t/p/original${
            // @ts-ignore
            info.detail.poster_path || info.detail.backdrop_path
          }`})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top ",
          // borderImage : "fill 1 black",
        }}
      >
        <header
          className="flex bg-black  items-center  justify-start gap-10 p-3 h-[10%] mb-10 text-lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(10px)",
          }}
        >
          <i
            className="ri-arrow-left-fill w-10 cursor-pointer text-2xl"
            onClick={() => navigate(-1)}
          ></i>
          <Link to={"/"}>
            <i className="ri-home-fill"></i>
          </Link>
          <a href="http://">
            <i className="ri-external-link-line "></i>
          </a>
          <a href="http://">
            <i className="ri-book-shelf-fill"></i>
          </a>
          <a href="http://">
            <i className="ri-movie-2-fill"></i>
          </a>
        </header>
        <main className="flex items-start justify-center">
          <div
            className=" bg-red-100 overflow-hidden rounded-xl  
          max-w-[20%] "
          >
            <img
              className="object-cover "
              src={`https://image.tmdb.org/t/p/original${
                info.detail.poster_path || info.detail.backdrop_path
              }`}
              alt="posters"
            />
          </div>
          <section className="flex gap-6 flex-col  ml-10 w-[50%]" id="content">
            <h1 className="text-4xl font-bold leading-[1.5em]">
              {info.detail.title || info.detail.name}
              <sub className="text-sm">{info.detail.release_date}</sub>
            </h1>
            <div id="headine" className="flex gap-4">
              <p className="bg-yellow-400  p-1 rounded-full grid place-content-center">
                {(info.detail.vote_average * 10).toFixed()}%
              </p>
              <span>{info.detail.genres.map((g) =>g.name).join(",")}</span>
            
              <p className="w-fit">({info.detail.runtime}m)</p>
            </div>
            <p>
              <b>OVERVIEW</b>
            </p>
            <p>{info.detail.overview || "no overview"}</p>

            <Link
              to={`${pathname}/trailer`}
              className="bg-[#6556CD] w-fit p-[3%] rounded-xl"
            >
              Play Trailer
            </Link>
          </section>
        </main>
        <br />
        <h1 className="text-xl ml-4 font-semibold uppercase underline">
          {suggest > 0 ? "" : "Recommdation & Similar"}
        </h1>
        <div className="w-100% py-3 px-2 flex items-start justify-start gap-3 overflow-auto">
          {suggest &&
            suggest.map((d, i) => {
              return (
                <div
                  key={i}
                  className="min-w-[15%] p-2 rounded-lg overflow-hidden shadow-md shadow-gray-400 h-[300px] mb-4 flex-grow"
                >
                  <img
                    className=" w-full rounded-lg object-cover object-center "
                    src={`https://image.tmdb.org/t/p/original${
                      d.poster_path || d.backdrop_path
                    }`}
                    alt="movieData"
                  />
                </div>
              );
            })}
        </div>
        <Outlet />
        <br />
        <br />
      </div>
    </>
  ) : (
    <Loader />
  );
}
