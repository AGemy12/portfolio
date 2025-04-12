import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      className={`absolute -top-[100px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] border-[4px] dark:bg-[linear-gradient(148.7deg,rgba(255,1,79,0.3)_4.79%,rgba(255,1,79,0.08)_79.5%)]   dark:bg-alt_dark border-white  dark:border-dark rounded-full mx-auto flex items-center justify-center z-10 text-xl text-yello_color dark:text-white font-bold`}
    >
      {title}
    </h2>
  );
}
