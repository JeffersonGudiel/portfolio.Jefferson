import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  const badges = Array.isArray(project.imgPaths)
    ? project.imgPaths.map((item, index) => ({
        key: index,
        icon: item.path,
        color: item.color,
        text: item.category || project.category,
      }))
    : [];

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            src={project.image}
            alt={project.altText || "Project image"}
            fill // Reemplaza layout="fill"
            style={{ objectFit: "cover" }} // Usar estilos CSS para objectFit
            quality={100} // Mejora la calidad de la imagen
            loading="lazy"
          />
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <Link2Icon aria-label="Link to project" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <Github aria-label="GitHub repository" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="relative px-8 py-6">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge) => (
            <Badge
              key={badge.key}
              className={`${badge.color} text-light dark:text-dark uppercase text-sm font-medium flex items-center`}>
              <Image
                src={badge.icon}
                width={15}
                height={15}
                alt={`Icon for ${badge.text}`}
                className="mr-1"
              />
              {badge.text}
            </Badge>
          ))}
        </div>
        <h2 className="h4 mb-1">{project.name}</h2>
        <p className="text-muted-foreground text-lg">{project.Description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
