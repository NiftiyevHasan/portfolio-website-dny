import React from "react";

const projectTag = ({ name, onClick, isSelected }) => {
  const buttonSelected = isSelected
    ? "text-white border-primary-500"
    : "[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonSelected} rounded-full border-2 px-6 py-3 test-xl cursor-pointer `}
    >
      {name}
    </button>
  );
};

export default projectTag;
