import React from "react";
import Skills_path from "./Skills_path";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center">
        <p className="uppercase text-3xl  tracking-widest font-bold text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I have Learned </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skills_path
            name="HTML"
            image_url="https://i.imgur.com/oC19wHq.png"
          />
          <Skills_path name="CSS" image_url="https://i.imgur.com/3z7x5sf.png" />
          <Skills_path
            name="JavaScript"
            image_url="https://i.imgur.com/Qlexvfe.png"
          />
          <Skills_path
            name="GitHub"
            image_url="https://i.imgur.com/VhY4Q1g.png"
          />
          <Skills_path
            name="MongoDB"
            image_url="https://i.imgur.com/mXZSbjb.png"
          />
          <Skills_path
            name="Tailwind"
            image_url="https://i.imgur.com/bDwSfmA.png"
          />
          <Skills_path
            name="React"
            image_url="https://i.imgur.com/pMIH6n1.png"
          />
          <Skills_path
            name="Next"
            image_url="https://i.imgur.com/29SklkP.png"
          />
          <Skills_path
            name="Node"
            image_url="https://i.imgur.com/g82GwII.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
