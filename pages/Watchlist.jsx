import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const Watchlist = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80  z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="https://i.imgur.com/Uz8KEVF.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Watchlist App</h2>
          <h3> Reactjs / ContextAPI / React-router </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-4">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="leading-8 mt-3">
            This is A Watchlist App where you can search Any movie and save to
            your lists like if you want to watch movie later you can save it to
            your Watchlist page by clicking on add to Watchlist and if you have
            already watched the movie you can add it to your Watched page by
            clicking add to watched and also if the movie is your favourite and
            you want to save it for future refernce you can save it to you
            favourite page by clicking heart icon and you can also move your
            movie to between watchlist and watched and also remove it by going
            to those pages and clicking the button which appear after hovering
            over the movie.The Movie is loading through An TMDB API and
            functionality are given by context API for the buttons and i have
            also used React-router to keep the UI sync with url.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://teal-naiad-3d55bd.netlify.app/">DEMO</a>
          </button>
          <button className="px-8 py-2 mt-4 ">
            <a href="https://github.com/Abhi-4793/Movie-list-app">CODE</a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ContextAPI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React-router
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Watchlist;
//  for gradient
//bg-gradient-to-r from-[#5651e5] to-[#8987cc]
