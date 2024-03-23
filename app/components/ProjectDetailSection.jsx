import React from "react";

const ProjectDetailSection = ({ projectData }) => {
	// Construct Tailwind CSS classes for background and text color dynamically
	// const bgClass = `bg-[${project.themeColor}]`; // Ensure your colors are valid Tailwind CSS colors or custom defined in your config
	// const textClass = `text-[${project.textColor}]`;

	return (
		<div
			className={`min-h-[33vh] flex items-center justify-center p-4 w-full my-0 text-center`}
			// className={`${bgClass} ${textClass} min-h-[33vh] flex items-center justify-center p-4 w-full my-0 text-center`}
		>
			<div>
				<h1>{projectData.value1}</h1>
				{Array.isArray(projectData.value2) ? (
					<ul>
						{projectData.value2.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				) : (
					<p className="text-lg font-semibold my-2">{projectData.value2}</p>
				)}
			</div>
			<div>
				<img
					className="object-contain h-auto w-auto ml-32 mt-32 rounded-t-xl relative group"
					src={projectData.image}
				/>
			</div>
		</div>
	);
};

export default ProjectDetailSection;
