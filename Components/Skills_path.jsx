import React from "react";
import Image from "next/image";
const Skills_path = (props) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={`/../public/assets/skills/${props.image_name}.png`}
            alt="/"
            width="64px"
            height="64px"
          />
        </div>
        <div>
          <h3 className="flex flex-col items-center justify-center">
            {props.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Skills_path;
