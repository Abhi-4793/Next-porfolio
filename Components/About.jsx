import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest font-bold text-xl text-[#5651e5]">
            About
          </p>
          <p className="py-2 text-gray-600">
            I am a final Year student At Galgotias university{" "}
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            vitae accusamus nulla dolor cum voluptates possimus a ex provident
            porro veniam, aut illum expedita laborum quam adipisci et magnam
            itaque?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolor harum ipsa dicta ipsam, adipisci totam deleniti hic, libero
            autem culpa? Reprehenderit at corrupti molestias esse vel? Sunt,
            praesentium amet!
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
