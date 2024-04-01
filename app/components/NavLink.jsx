import Link from "next/link";
import React from "react";

const NavLink = ({ href, title, isShrunk }) => {
	const linkStyle = `block pl-3 pr-4 text-[#ADB7BE] hover:text-white ${
		isShrunk ? "py-1 sm:text-base" : "py-2 sm:text-xl"
	} md:${isShrunk ? "p-0 py-1" : "py-2"} md:${
		isShrunk ? "p-0 text-base" : "text-xl"
	}`;

	return (
		<Link href={href} className={linkStyle}>
			{title}
		</Link>
	);
};

export default NavLink;
