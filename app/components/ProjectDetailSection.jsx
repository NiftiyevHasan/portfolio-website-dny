import React from "react";

const ProjectDetailSection = ({ projectData }) => {
	// Construct Tailwind CSS classes for background and text color dynamically
	console.log(projectData); // This will show you the content of projectData in the console
	const style = {
		backgroundColor: projectData.bgColor,
		color: projectData.mainColor,
	};
	// const textClass = `text-[${project.textColor}]`;
	// rgb(219 255 248) and white for cargo

	// rgb(255 208 208) and rgb(255 222 222) for pocket
	// rgb(237 196 158) and rgb(255 220 196) for house to buy
	return (
		<div
			style={style}
			className={`min-h-[33vh] ${projectData.bgColor} md:flex-row flex items-center justify-evenly p-12 w-full my-0`}
			// className={`${bgClass} ${textClass} min-h-[33vh] flex items-center justify-center p-4 w-full my-0 text-center`}
		>
			<div>
				<h1
					style={style}
					className="text-xl md:text-2xl lg:text-3xl font-bold "
				>
					{projectData.value1}
				</h1>
				{Array.isArray(projectData.value2) ? (
					<ul>
						{projectData.value2.map((item, idx) => (
							<li className="list-inside list-disc text-xl" key={idx}>
								{item}
							</li>
						))}
					</ul>
				) : (
					<p className="mt-4 text-base md:text-md text-black">
						{projectData.value2}
					</p>
				)}
			</div>

			<div>
				<img
					className="object-contain h-96 w-auto rounded-t-xl relative group"
					src={projectData.image}
				/>
			</div>
		</div>
	);
};

export default ProjectDetailSection;
