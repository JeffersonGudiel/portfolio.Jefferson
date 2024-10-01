"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/Work/blog-app.webp",
    name: "University blog",
    Description:
      "Desarrollé un software de blog para la Universidad Galileo, que facilita el acceso a eventos, cursos y carreras. El proyecto incluye interacción de usuarios y administradores para gestionar actualizaciones, y acumula fondos a través de interacciones para apoyar a los estudiantes en sus oportunidades educativas.",
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
    additionalCategory: "Full Stack",
  },
  {
    image: "/Work/weather-app.webp",
    name: "Weather app",
    Description:
      "Aplicación creada para una empresa de viajes, permite consultar el clima mundial con datos como temperatura y pronóstico, facilitando la planificación de sus viajes.",
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
    additionalCategory: "Full Stack",
  },
  {
    image: "/Work/task-platform.webp",
    name: "Task platform",
    Description:
      "Plataforma de tareas para empresas, con autenticación y roles de usuario, permite a los empleados gestionar tareas y proyectos de forma eficiente.",
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
    additionalCategory: "Full Stack",
  },
  {
    image: "/Work/drawing-app.webp",
    name: "Drawing app",
    Description:
      "Creé una aplicación de dibujo en tiempo real, ahora usada en una escuela de bajos recursos y por psicólogos, ayudando a los estudiantes a expresarse creativamente y mejorar su bienestar emocional.",
    link: "https://drawing-app-livid-ten.vercel.app/",
    github: "https://github.com/JeffersonGudiel/drawing-app",
    altText: "Screenshot of Project 1, built with React JS",
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
    additionalCategory: "Frontend",
  },
  {
    image: "/Work/typing-game.webp",
    name: "Typing game",
    Description:
      "Juego de mecanografía para mejorar velocidad y precisión, desafiando a los usuarios a completar frases dentro de un límite de tiempo, con dificultad creciente para desarrollar habilidades de escritura rápida y precisa.",
    link: "https://typing-game-oficial.vercel.app/",
    github: "https://github.com/JeffersonGudiel/typing-Game",
    altText: "Screenshot of Typing game, built with JAVASCRIPT and HTML",
    imgPaths: [
      {
        path: "/about/front-end/html5.svg",
        color: "bg-gradient-to-r from-orange-400 to-orange-600",
        category: "HTML",
      },
      {
        path: "/about/front-end/javascript.svg",
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        category: "JavaScript",
      },
    ],
    additionalCategory: "Frontend",
  },
  {
    image: "/Work/drawing-app.webp",
    name: "Project 2",
    Description: "This is a description of project 2",
    link: "/",
    github: "/",
    altText: "Screenshot of Project 2, built with Next.js",
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
    additionalCategory: "Backend",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.additionalCategory)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.additionalCategory === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-8 text-center mx-auto">
          🌟Proyectos Empresariales y Más Destacados 🌟
        </h2>
        <p className="text-3xl mb-8 xl:mb-12 text-center mx-auto">
          🫰Proyectos Empresariales y Más Destacados🫰
        </p>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
