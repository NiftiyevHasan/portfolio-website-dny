import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? " hover:text-white  border-b border-purple-500"
    : "text-[#ADB&BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
