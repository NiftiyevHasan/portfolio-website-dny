import React, { useState } from "react";
import ModalPortal from "./ModalPortal";
import ProjectDetails from "./ProjectDetails";
import ProtectedProjectModal from "./ProtectedProjectModal";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ project }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isProtectedOpen, setIsProtectedOpen] = useState(false);

	const handleOpen = () => {
		if (project.isProtected) {
			setIsProtectedOpen(true);
		} else {
			setIsOpen(true);
		}
	};
	const handleClose = () => {
		setIsOpen(false);
		setIsProtectedOpen(false);
	};
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${project.image})`,
					backgroundSize: "cover",
				}}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
					<Link
						href={project.gitUrl}
						className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white" />
					</Link>
					<div
						className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
						onClick={handleOpen} // Attach the onClick handler directly to this div
					>
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
					</div>
					{isOpen && (
						<ModalPortal>
							<div className={`modal-content ${isOpen && "show"}`}>
								<ProjectDetails
									project={project}
									// description={description}
									// imgUrl={imgUrl}
									// gitUrl={gitUrl}
									// previewUrl={previewUrl}
									onClose={handleClose}
								/>
							</div>
						</ModalPortal>
					)}
					{isProtectedOpen && (
						<ProtectedProjectModal project={project} onClose={handleClose} />
					)}
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
				<h5 className="text-xl text-center font-semibold mb-1">
					{project.title}
				</h5>
				<p className="text-[#ADB7BE] italic text-xs mb-2 text-center">
					{project.overview}
				</p>
				<p className="text-[#ADB7BE]">
					{project.description.split(/(?<=\.\s)/, 1).join("")}
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
