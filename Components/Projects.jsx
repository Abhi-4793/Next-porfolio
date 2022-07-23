import React from "react";

import ProjectList from "./ProjectList";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-3xl tracking-widest uppercase font-bold text-[#5651e5]">
        Projects
      </p>
      <h2 className="py-4">What i have built till now</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectList
          title="Watchlist App"
          backgroundImg="https://i.imgur.com/Uz8KEVF.png"
          projecturl="/Watchlist"
        />
        <ProjectList
          title="football list"
          backgroundImg="https://i.imgur.com/L2MA0rb.png"
          projecturl="/footballApp"
        />
      </div>
    </div>
  );
};

export default Projects;
