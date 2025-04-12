"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionTitle from "../parts/SectionTitle";
import SkillCard from "../parts/SkillCard";

export default function Skills() {
  const skillsImgsList: { imgName: string; skillName: string }[] = [
    { imgName: "javascript", skillName: "JavaScript" },
    { imgName: "react", skillName: "React" },
    { imgName: "next", skillName: "Next.js" },
    { imgName: "vue", skillName: "Vue.js" },
    { imgName: "nuxt", skillName: "Nuxt.js" },
    { imgName: "redux", skillName: "Redux" },
    { imgName: "pinia", skillName: "Pinia" },
    { imgName: "html", skillName: "HTML" },
    { imgName: "css", skillName: "CSS" },
    { imgName: "tailwind", skillName: "Tailwind CSS" },
    { imgName: "sass", skillName: "Sass" },
    { imgName: "bootstrap", skillName: "Bootstrap" },
  ];

  return (
    <div className="pt-[150px] pb-24 relative bg-alt_light dark:bg-black z-10">
      <div className="container mx-auto mb-24">
        <SectionTitle title="My Skills" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12">
          {skillsImgsList.map((skill, index) => (
            <SkillCard
              key={index}
              imgName={skill.imgName}
              skillName={skill.skillName}
            />
          ))}
        </div>
      </div>
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={120}
        slidesPerView={8}
        freeMode={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiper.wrapperEl.style.alignItems = "center";
        }}
        breakpoints={{
          0: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 120,
          },
        }}
      >
        {skillsImgsList.map((skill, index) => (
          <SwiperSlide key={index}>
            <img src={`/assets/media/skills/${skill.imgName}.svg`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
