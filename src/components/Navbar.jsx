"use client";

import { copyRightIcon, navbarData } from "@/assets";

const Navbar = ({ id }) => {
  return (
    <div className="w-[45px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-2 py-4 z-10">
      <a href="#">
        <span className="text-3xl font-semibold text-red-400">V</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white">
          Rain
        </span>
      </a>
      <div className="flex flex-col gap-2 mb-12">
        {navbarData.map((item, i) => (
          <a
            href={`/#${item.id}`}
            key={i}
            className="group flex flex-col items-center"
          >
            <span
              className={`text-2xl group-hover:scale-125 transition-all ${
                item.id === id
                  ? "text-red-500 scale-110"
                  : "text-yellow-600 scale-100"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${
                i % 2 === 0 ? "translate-x-2" : "-translate-x-2"
              } ${item.id === id && "-translate-x-0 opacity-100"}`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[15px] text-gray-500 bottom-0">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors">
          {copyRightIcon}2022-{new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
