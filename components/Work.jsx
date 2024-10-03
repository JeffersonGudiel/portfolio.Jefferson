"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/Work/blog-app.webp",
    name: "University blog",
    Description:
      "Blogging software for Galileo University, facilitating access to events, courses, and careers. The project includes interaction between users and administrators to manage updates and accumulate funds through interactions to support students in their educational opportunities.",
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
    image: "/Work/weather-app.webp",
    name: "Weather app",
    Description:
      "An application created for a travel company allows you to check the world's weather with data such as temperature and forecast, making travel planning easier.",
    link: "https://weather-app-oficial.vercel.app/",
    github: "https://github.com/JeffersonGudiel/Weather-app",
    altText: "Screenshot of Weather app, built with Next.js, Tailwind CSS",
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
        path: "/about/front-end/react.svg",
        color: "bg-gradient-to-r from-sky-400 to-sky-600",
        category: "React JS",
      },
      {
        path: "/about/front-end/javascript.svg",
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        category: "JavaScript",
      },
    ],
  },
  {
    image: "/Work/task-platform.webp",
    name: "Task platform",
    Description:
      "Task platform for enterprises, developed as a MERN Stack, including authentication and user roles. This platform allows employees to manage tasks and projects efficiently, facilitating collaboration and tracking progress in real time.",
    link: "https://definite-herring-65.accounts.dev/sign-in",
    github: "https://github.com/JeffersonGudiel/task-platform",
    altText:
      " Screenshot of Task platform, built with NEXT JS, TYPESCRIPT, REACT JS, TAILWIND CSS, PRISMA, MONGODB",
    imgPaths: [
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
        path: "/about/front-end/react.svg",
        color: "bg-gradient-to-r from-sky-400 to-sky-600",
        category: "React JS",
      },
      {
        path: "/about/front-end/typescript.svg",
        color: "bg-gradient-to-r from-blue-400 to-blue-600",
        category: "TypeScript",
      },
      {
        path: "about/Back-end/prisma.svg",
        color: "bg-gradient-to-r from-slate-400 to-slate-600",
        category: "Prisma",
      },
      {
        path: "/about/database/mongodb.svg",
        color: "bg-gradient-to-r from-green-600 to-green-800",
        category: "MongoDB",
      },
    ],
  },
  {
    image: "/Work/drawing-app.webp",
    name: "drawing app",
    Description:
      "A real-time drawing app is now used in a low-income school and by psychologists, helping students express themselves creatively and improve their emotional well-being.",
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
];

const Work = () => {
  return (
    <section className="relative mb-6 xl:mb-18">
      <div className="container mx-auto">
        {/* {text} */}
        <div className="text-center mb-12 xl:mb-6 xl:h-[300px] flex flex-col justify-center items-center">
          <h2 className=" text-center font-semibold text-[42px] mt-5 text-theme-text-primary dark:text-theme-text-primary-dark md:text-[32px] md:mt-3">
            🌐Business Projects and More Highlights🌐
          </h2>
          <p className="subtitle mb-8 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            If you liked what you've seen so far, I invite you to explore my
            full portfolio. There you'll find a variety of innovative and
            creative projects I've developed, each with its own unique set of
            challenges and solutions.🚀
          </p>
          <Link href="/projects">
            <Button>👉Explore my projects👈</Button>
          </Link>
        </div>
        {/* {slider} */}
        <div className="flex justify-center">
          <Swiper
            className="h-[780px] xl:h-[680px] md:h-[620px]"
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
