"use client";
import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function SwitcherThemeBtn() {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={` bg-light shadow-[inset_0_5px_15px_rgba(0,0,0,0.4),inset_0_-5px_15px_rgba(255,255,255,0.4)] w-[100px] h-[50px] rounded-full dark:text-white  flex items-center justify-between after:absolute after:w-[40px] after:h-[40px] after:top-1/2 after:-translate-y-1/2 cursor-pointer after:left-[5px] dark:after:left-[calc(100%-45px)] after:bg-amber-400 dark:after:bg-black after:rounded-[200px]  after:transition-all after:duration-300`}
    >
      <div className="z-30 absolute top-1/2 -translate-y-1/2 right-[66px]">
        <FiSun className="text-light text-xl dark:text-black" />
      </div>
      <div className="z-30 absolute top-1/2 -translate-y-1/2 left-[66px]">
        <FiMoon className="text-black text-xl dark:text-light" />
      </div>
    </button>
  );
}
