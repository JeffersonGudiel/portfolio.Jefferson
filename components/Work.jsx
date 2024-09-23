"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { color } from "framer-motion";

const projectData = [
  {
    image: "/Work/drawing-app.webp",
    name: "University blog",
    Description:
      "Proyecto para universidad Galileo, con interacción de usuarios y administradores para gestionar actualizaciones, cursos y eventos.",
    link: "https://blog-universidad.vercel.app/",
    github: "https://github.com/JeffersonGudiel/blog-universidad",
    altText:
      "Screenshot of University blog, built with Next.js, TypeScript and Tailwind CSS",
    imgPaths: [
      {
        path: "/about/front-end/typescript.svg",
        color: "bg-gradient-to-r from-cyan-400 to-cyan-600",
        category: "TypeScript",
      },
      {
        path: "/about/front-end/nextjs_icon_dark.svg",
        color: "bg-gradient-to-r from-gray-800 to-gray-900",
        category: "Next.js",
      },
      {
        path: "/about/front-end/tailwindcss.svg",
        color: "bg-gradient-to-r from-cyan-400 to-cyan-600",
        category: "Tailwind CSS",
      },
    ],
  },
  {
    image: "/Work/drawing-app.webp",
    name: "drawing app",
    Description:
      "Aplicación para dibujar en tiempo real, con diferentes colores y tamaños de pincel.",
    link: "https://drawing-app-livid-ten.vercel.app/",
    github: "https://github.com/JeffersonGudiel/drawing-app",
    altText:
      "Screenshot of Drawing app, built with Next.js, Tailwind CSS, Javascript and Typescript",
    imgPaths: [
      {
        path: "/about/front-end/typescript.svg",
        color: "bg-gradient-to-r from-cyan-400 to-cyan-600",
        category: "TypeScript",
      },
      {
        path: "/about/front-end/nextjs_icon_dark.svg",
        color: "bg-gradient-to-r from-gray-800 to-gray-900",
        category: "Next.js",
      },
      {
        path: "/about/front-end/tailwindcss.svg",
        color: "bg-gradient-to-r from-cyan-400 to-cyan-600",
        category: "Tailwind CSS",
      },
      {
        path: "/about/front-end/javascript.svg",
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        category: "JavaScript",
      },
    ],
  },
  {
    image: "/Work/drawing-app.webp",
    name: "Project 3",
    Description: "This is a description of project 3",
    link: "/",
    github: "/",
    altText: "Screenshot of Project 3, built with React JS",
    imgPaths: [
      {
        path: "/about/front-end/react.svg",
        color: "bg-sky-600",
        category: "React JS",
      },
      {
        path: "/about/front-end/nextjs_icon_dark.svg",
        color: "dark:bg-gray-950",
        category: "Next.js",
      },
      {
        path: "/about/front-end/tailwindcss.svg",
        color: "bg-cyan-600",
        category: "Tailwind CSS",
      },
    ],
  },
  {
    image: "/Work/drawing-app.webp",
    name: "Project 3",
    Description: "This is a description of project 3",
    link: "/",
    github: "/",
    altText: "Screenshot of Project 3, built with React JS",
    imgPaths: [
      {
        path: "/about/front-end/react.svg",
        color: "bg-sky-600",
        category: "React JS",
      },
      {
        path: "/about/front-end/nextjs_icon_dark.svg",
        color: "dark:bg-gray-950",
        category: "Next.js",
      },
      {
        path: "/about/front-end/tailwindcss.svg",
        color: "bg-cyan-600",
        category: "Tailwind CSS",
      },
    ],
  },
];

const Work = () => {
  return (
    <section className="relative mb-6 xl:mb-18">
      <div className="container mx-auto">
        {/* {text} */}
        <div className="text-center mb-12 xl:mb-6 xl:h-[300px] flex flex-col justify-center items-center">
          <h2 className=" text-center font-semibold text-[42px] mt-5 text-theme-text-primary dark:text-theme-text-primary-dark md:text-[32px] md:mt-3">
            🌐 Proyectos Empresariales y Más Destacados 🌐
          </h2>
          <p className="subtitle mb-8 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Si te ha gustado lo que has visto hasta ahora, te invito a
            explorar mi portafolio completo. Allí encontrarás una variedad de
            proyectos innovadores y creativos que he desarrollado, cada uno con
            su propio conjunto único de desafíos y soluciones.
          </p>
          <Link href="/projects">
            <Button>👉 Explora mis proyectos 👈</Button>
          </Link>
        </div>
        {/* {slider} */}
        <div className="flex justify-center">
          <Swiper
            className="h-[510px] xl:h-[550px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1025: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
            modules={[Pagination]}
            pagination={{ clickable: true }}>
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
