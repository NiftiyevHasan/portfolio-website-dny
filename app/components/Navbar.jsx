"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";
const navLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];
const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [isShrunk, setIsShrunk] = useState(false);

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};
	useEffect(() => {
		const handleScroll = () => {
			setIsShrunk(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav
			className={`fixed mx-auto top-0 left-0 right-0 z-50 w-full bg-[#121212] bg-opacity-90 transition-all duration-300 ${
				isShrunk ? "text-xs py-0" : "text-lg lg:py-4 py-2"
			} `}
		>
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link
					href={"/"}
					className={`text-xl md:text-3xl font-semibold transition-all duration-300 ${
						isShrunk ? "scale-75" : "scale-125"
					}`}
				>
					<span className="stroke-cyan-500 text-white border border-white rounded-md px-2 py-1 mt-4 mb-4">
						DU
					</span>
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
							variants={variants}
							animate="open"
						>
							<Bars3Icon className="w-5 h-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="w-5 h-5" />
						</button>
					)}
				</div>
				<motion.div className="menu hidden md:block md:w-auto" id="navbar">
					<ul
						className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"
						variants={variants}
						animate="open"
						exit="closed"
						transition={{ type: "spring", stiffness: 260, damping: 20 }}
					>
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink
									href={link.path}
									title={link.title}
									isShrunk={isShrunk}
								/>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
			{navbarOpen && <MenuOverlay links={navLinks} />}
		</nav>
	);
};
export default Navbar;
