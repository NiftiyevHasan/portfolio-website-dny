import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <motion.ul
      className="flex flex-col py-4 items-center"
      initial="closed"
      animate="open"
      exit="closed"
      variants={itemVariants}
    >
      {links.map((link, index) => (
        <motion.li key={index} variants={itemVariants}>
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuOverlay;
