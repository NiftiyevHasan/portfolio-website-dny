"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const tabs = [
	{ id: "skills", label: "Skills" },
	{ id: "tools", label: "Tools" },
	{ id: "research", label: "Research" },
	{ id: "education", label: "Education" },
	{ id: "certification", label: "Certification" },
];
const tabContent = {
	skills: [
		"UI/UX design",
		"UX Research",
		"Digital marketing",
		"User Experience Design",
		"Design Thinking",
		"Project Management",
		"User Research",
		"Market Research",
		"Prototypes",
		"Wireframing",
		"Digital Strategy",
		"Visual Design",
		"Data Analysis",
	],
	tools: [
		"Figma",
		"Adobe",
		"FigJam",
		"Webflow",
		"Marvel",
		"POP",
		"Miro",
		"Asana",
		"Notion",
		"Adobe Photoshop",
		"3Ds Max & Vray",
		"AutoCAD",
		"Revit",
		"Sketchup",
	],
	research: [
		"Heuristic & Competitive Analyses",
		"Card Sorting & A/B Testing",
		"User Research",
		"Interviews & Personas",
		"Product Validation & Usability Testing",
		"Agile methodologies",
		"Cross-functional collaboration",
	],
	education: [
		"Springboard, UX Design Career Track Certification, 2022-2023",
		"San Francisco State University, Bachelor in Interior Design and Minor in Art, 2015-2018",
	],
	certification: ["Springboard, UX Design Career Track Certification"],
};

const AboutSection = () => {
	const [tab, setTab] = useState("skills");

	const [isPending, startTransition] = useTransition();
	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 }, // Adjust stagger timing as needed
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};
	const listVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: { opacity: 1, x: 0 },
	};
	return (
		<section className="text-white ">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16">
				<Image
					className="rounded-md"
					src="/images/about-image.png"
					alt="about image"
					width={500}
					height={500}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base md:text-lg">
						With a unique blend of digital marketing prowess and a keen eye for
						design, my journey from marketing to UX/UI design was driven by an
						insatiable curiosity about user interaction with digital spaces.
						Leveraging data-driven insights and a customer-centric approach, I
						strive to create seamless, impactful user experiences.
					</p>
					<div className="flex flex-row justify-start mt-8">
						{tabs.map((tabInfo) => (
							<TabButton
								key={tabInfo.id}
								active={tab === tabInfo.id}
								selectTab={() => handleTabChange(tabInfo.id)}
							>
								{tabInfo.label}
							</TabButton>
						))}
					</div>
					<div>
						<motion.ul
							key={tab}
							className="mb-5 mt-8 list-disc pl-2 two-column-list "
							initial="hidden"
							animate="visible"
							variants={containerVariants}
						>
							{tabContent[tab].map((item, index) => (
								<motion.li
									key={index}
									variants={itemVariants}
									className="mb-2 hover:scale-110 hover:text-brighter transition-transform duration-100 hover:z-10"
									whileHover={{
										scale: 1.1,
										zIndex: 10,
									}}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{item}
								</motion.li>
							))}
						</motion.ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
