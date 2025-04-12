"use client";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center ">
      <div className="absolute top-0 left-0 ">
        <img
          src="/assets/media/hero.png"
          alt="hero background image"
          className="opacity-50 max-w-full h-auto"
        />
      </div>
      <div className="absolute top-[-400px] right-[-400px] w-[1200px] h-[1200px] bg-[linear-gradient(134.82deg,rgba(255,1,79,0.25)_10.11%,rgba(255,1,79,0.25)83.27%)] blur-[800px] opacity-70"></div>
      <div className="absolute top-0 left-0 w-[40vw] h-[70vh] bg-[linear-gradient(148.7deg,rgba(255,1,79,0.3)_4.79%,rgba(255,1,79,0.08)_79.5%)] blur-[100px] opacity-80"></div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-[100px] animate-hand_motate">
          <img src="/assets/media/hi.png" className="w-full" alt="hi image" />
        </div>
        <div className="relative w-screen min-h-[50px] md:min-h-[100px]">
          <h1 className="absolute top-1/2 left-1/2 -translate-1/2 whitespace-nowrap text-4xl md:text-6xl lg:text-9xl font-black uppercase text-transparent [-webkit-text-stroke:2px_var(--dark)] dark:[-webkit-text-stroke:2px_var(--light)] ">
            ahmad marzouk
          </h1>
          <h1 className="absolute top-1/2 left-1/2 -translate-1/2  whitespace-nowrap text-4xl md:text-6xl lg:text-9xl font-black uppercase text-dark_color animate-waveFill">
            ahmad marzouk
          </h1>
        </div>
        <div className="text-center text-2xl md:text-4xl lg:text-6xl font-bold  relative">
          <span className="text-gray-800 dark:text-white">I'm a </span>
          <TypeAnimation
            sequence={[
              "Frontend Web Developer",
              2000,
              "Next.js Developer",
              2000,
              "Vue.js Developer",
              2000,
            ]}
            speed={50}
            deletionSpeed={50}
            repeat={Infinity}
            cursor={false}
            wrapper="span"
            className="text-dark_color font-black"
          />
          <span className="w-[2px] h-[20px] md:h-[50px] block dark:bg-white bg-black animate-pulse ml-1 absolute top-1/2 -translate-y-1/2 -right-[10px] "></span>{" "}
        </div>
        <p className="text-lg lg:text-2xl text-black dark:text-white lg:w-full w-4/5 mx-auto text-center md:text-justify">
          I craft modern web apps with the power of Next.js & Vue.js.
        </p>
      </div>
    </div>
  );
}
