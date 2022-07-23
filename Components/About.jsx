import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest font-bold text-3xl text-[#5651e5]">
            About
          </p>
          <p className="py-2 text-gray-600 mt-5">
            I am{" "}
            <span className=" tracking-widest font-bold text-2xl text-[#534fb3]">
              Abhinav Krishna Singh
            </span>
          </p>
          <p className="py-2 text-gray-600 leading-8">
            Hi! I am Abhinav.I am a Frontend Web Developer and a final Year
            Student at Galgotias University.
          </p>
          <p className="py-2 text-gray-600 leading-8">
            I like Working on new Technologies and always ready to learn more ,I
            am doing React for almost 1 year now and also have a basic grasp of
            Next.js and also know about State mangament library like Redux .I am
            also familar with Backend framework like Express js and Nosql
            Database like MongoDB . I also have Good understanding Of
            ES6(JavaScript) and Nodejs. Like to work With a Group where I can
            learn more from them and improve my skills.
          </p>
        </div>
        <div className=" relative flex items-center justify-center m-auto">
          <Image
            className="left-0 shadow-md shadow-gray-400 right-0 rounded-full w-full h-full   p-2 hover:scale-105 ease-in duration-300"
            src="https://i.imgur.com/W6YOUiV.jpg"
            width="300"
            height="300"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
