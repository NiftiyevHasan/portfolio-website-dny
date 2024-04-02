import { useEffect, useState } from "react";
import projectsData from "../../public/data/projects.JSON";

export default function ProjectsPage() {
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		// Fetch and display the project based on the ID in the query parameter
		const storedProjectId = localStorage.getItem("selectedProjectId");
		if (storedProjectId) {
			const project = projectsData.find(
				(p) => p.id.toString() === storedProjectId
			);
			setSelectedProject(project);
		}
	}, []);

	if (!selectedProject) {
		return <div>Please select a project from the main page.</div>;
	}

	return (
		<div>
			<h1>{selectedProject.title}</h1>
			<p>{selectedProject.description}</p>
		</div>
	);
}
