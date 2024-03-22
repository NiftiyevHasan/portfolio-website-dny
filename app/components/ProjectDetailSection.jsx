import React from "react";

const ProjectDetailSection = ({ project }) => {
  // Construct Tailwind CSS classes for background and text color dynamically
  const bgClass = `bg-[${project.themeColor}]`; // Ensure your colors are valid Tailwind CSS colors or custom defined in your config
  const textClass = `text-[${project.textColor}]`;

  return (
    <div
      className={`${bgClass} ${textClass} min-h-[33vh] flex items-center justify-center p-4 w-full my-0 text-center`}
    >
      <div>
        <h1>{project.title} Case Study</h1>
        <p className="text-xl font-semibold mt-4">{project.description}</p>
      </div>
      <div>
        <img
          className="object-contain h-96 w-72 ml-32 mt-32 rounded-t-xl relative group"
          src={project.headerImage}
        />
      </div>
    </div>
  );
};

export default ProjectDetailSection;
