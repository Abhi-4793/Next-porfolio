import React from "react";
import Skills_path from "./Skills_path";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center">
        <p className="uppercase text-xl  tracking-widest font-bold text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I have Learned </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skills_path name="HTML" image_name="html" />
          <Skills_path name="CSS" image_name="css" />
          <Skills_path name="JavaScript" image_name="javascript" />
          <Skills_path name="GitHub" image_name="github1" />
          <Skills_path name="MongoDB" image_name="mongo" />
          <Skills_path name="Tailwind" image_name="tailwind" />
          <Skills_path name="React" image_name="react" />
          <Skills_path name="Next" image_name="nextjs" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
