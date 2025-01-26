import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-wood"
      >
        <path
          d="M20 2L2 15H6V35H34V15H38L20 2Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 35V25H24V35"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M12 20H16M24 20H28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-serif text-xl text-wood-dark hidden md:block">
        Le Chalet du Salève
      </span>
    </div>
  );
};

export default Logo;