import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
// import football from "../public/assets/projects/football_list.png";
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
          <h2 className="py-2">Footabll Leagues and Standings App</h2>
          <h3> Reactjs / ContextAPI / React-router </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-4">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, excepturi? Qui numquam fugit facilis provident,
            explicabo molestias reprehenderit est. Minus incidunt cum aliquam,
            omnis deserunt blanditiis labore quia voluptatibus natus. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            expedita animi voluptates quibusdam nemo itaque numquam doloremque
            corporis excepturi enim, officiis voluptatem dignissimos saepe
            asperiores necessitatibus, repellat, sint voluptate exercitationem!
          </p>
          <button className="px-8 py-2 mt-4 mr-8" href="">
            DEMO
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
