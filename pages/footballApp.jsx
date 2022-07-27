import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80  z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="https://i.imgur.com/L2MA0rb.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Football Leagues and Standings App</h2>
          <h3> Reactjs / API/ React-router </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-4">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className=" mt-3 leading-7">
            This is a Football League And Standings App where you can See all
            the football league on the League Page and On standings Page you can
            See all standings of every league in past 12 years e.g:In 2019 In
            Laliga Real madrid is on top and Espanyol is on last. This is A
            React App with fetches The data from an Free API.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://62e0360eb097b500088ba587--musical-manatee-0c730a.netlify.app/">
              DEMO
            </a>
          </button>
          <button className="px-8 py-2 mt-4 ">
            <a href="https://github.com/Abhi-4793/footballl-League-Standing">
              CODE
            </a>
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
                API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React-Loader
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

export default property;
//  for gradient
//bg-gradient-to-r from-[#5651e5] to-[#8987cc]
