"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectSection = () => {
	const [tag, setTag] = useState("All");
	const [projects, setProjects] = useState([]);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		fetch("/data/projects.json")
			.then((response) => response.json())
			.then((data) => setProjects(data));
	}, []);

	const filteredProjects = projects.filter((project) =>
		tag === "All" ? true : project.tag.includes(tag)
	);

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				></ProjectTag>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
				></ProjectTag>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				></ProjectTag>
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard key={project.id} project={project} />
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectSection;
