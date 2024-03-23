import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ProjectDetailSection from "./ProjectDetailSection";

const ProjectDetails = ({ project, onClose }) => {
	const attributes = [
		["title", "overview", "headerImage"],
		["description", "tools", "anotherimage"],
		["problems", "goals", "headerImage"],
		["myRole", "roles", "anotherimage2"],
		["conclusion", "acknowledgment", "headerImage"],
		// Add more attribute sets as needed
	];

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
				<div className="modal-inner-content">
					{attributes.map((attrSet, index) => {
						// Directly construct the projectData object for the current iteration
						const projectData = {
							value1: project[attrSet[0]],
							value2: Array.isArray(project[attrSet[1]])
								? project[attrSet[1]]
								: project[attrSet[1]],
							image: project[attrSet[2]],
						};

						return (
							<ProjectDetailSection key={index} projectData={projectData} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
