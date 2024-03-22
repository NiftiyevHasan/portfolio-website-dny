import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ProjectDetailSection from "./ProjectDetailSection";

const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent scrolling on the main document body
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="relative flex flex-col  items-stretch justify-start min-h-screen text-4xl text-white font-bold">
        <button onClick={onClose} className="close-button mt-2 ">
          <XMarkIcon className="close-button-icon" />
        </button>
        {/* Add ProjectDetailSection components here */}
        <ProjectDetailSection project={project} />
        <ProjectDetailSection project={project} />
        <ProjectDetailSection project={project} />
        <ProjectDetailSection project={project} />
        {/* Additional ProjectDetailSection components as needed */}
      </div>
    </div>
  );
};

export default ProjectDetails;
