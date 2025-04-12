"use client";
import { useTheme } from "../../context/ThemeContext";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

export default function SwitcherThemeBtn() {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={` bg-light shadow-[inset_0_5px_15px_rgba(0,0,0,0.4),inset_0_-5px_15px_rgba(255,255,255,0.4)] w-[100px] h-[50px] rounded-full dark:text-white  flex items-center justify-between after:absolute after:w-[40px] after:h-[40px] after:top-1/2 after:-translate-y-1/2 cursor-pointer after:left-[5px] dark:after:left-[calc(100%-45px)] after:bg-amber-400 dark:after:bg-dark_color after:rounded-[200px]  after:transition-all after:duration-300 z-50 relative`}
    >
      <div className="z-30 absolute top-1/2 -translate-y-1/2 right-[64px]">
        <FiSun className="text-light text-2xl dark:text-dark" />
      </div>
      <div className="z-30 absolute top-1/2 -translate-y-1/2 left-[64px]">
        <IoMoonOutline className="text-dark text-2xl dark:text-light" />
      </div>
    </button>
  );
}
