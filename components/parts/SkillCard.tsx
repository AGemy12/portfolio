import React from "react";

interface SkillCardProps {
  imgName: string;
  skillName: string;
}

export default function SkillCard({ imgName, skillName }: SkillCardProps) {
  return (
    <div className="group flex flex-col items-center justify-center p-2 bg-white dark:bg-dark shadow-lg border-[1px] border-dashed dark:border-alt_light rounded-full w-[150px] h-[150px] mx-auto hover:-translate-y-1 duration-300 relative before:absolute before:top-[-3px] before:left-[-3px] before:w-[calc(100%+6px)] before:h-[calc(100%+6px)] before:bg-transparent before:border-[6px] before:border-dark dark:before:border-t-light before:border-l-transparent before:border-r-transparent before:border-b-transparent before:rounded-full hover:before:border-t-yello_color dark:hover:before:border-t-dark_color before:duration-300 ">
      <img
        src={`/assets/media/skills/${imgName}.svg`}
        alt={skillName}
        className="w-14 h-14 mb-4"
      />
      <p className="text-sm font-medium text-gray-700 dark:text-white group-hover:text-dark_color">
        {skillName}
      </p>
    </div>
  );
}
