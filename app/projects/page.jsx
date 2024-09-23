"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/drawing app.webp",
    name: "University blog",
    Description:
      "Proyecto para universidad, con interacción de usuarios y administradores para gestionar actualizaciones, cursos y eventos.",
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
    image: "/work/drawing app.webp",
    name: "Drawing app",
    Description:
      "Aplicación para dibujar en tiempo real, con diferentes colores y tamaños de pincel.",
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
    image: "/work/drawing app.webp",
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
