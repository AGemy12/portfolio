import React from "react";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-between">
      <div></div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="relative w-full h-[100px]">
          <h2 className="text_stroke whitespace-nowrap text-4xl md:text-6xl lg:text-8xl font-bold capitalize absolute left-0 top-1/2 -translate-y-1/2 text-transparent">
            ahmad marzouk
          </h2>
          <h2 className="animate-fill_text whitespace-nowrap text-4xl md:text-6xl lg:text-8xl font-bold capitalize absolute left-0 top-1/2 -translate-y-1/2 text-blue-400 clip-wave">
            ahmad marzouk
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl dark:text-light">
            Front-End Developer specialized in Next.js & React
          </h2>
          <p className="dark:text-light text-justify text-lg leading-8 md:max-w-3/4 ">
            I’m a passionate developer with a strong focus on building fast,
            responsive, and user friendly web applications using Next.js, React,
            and modern web tools. Let’s build something great together!
          </p>
        </div>
      </div>
    </section>
  );
}
