"use client";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/jefferson-alexander/",
    name: <RiLinkedinFill className="w-12 h-10" aria-label="LinkedIn" />,
  },
  {
    path: "https://github.com/JeffersonGudiel",
    name: <RiGithubFill className="w-12 h-10" aria-label="GitHub" />,
  },
];

const Socials = ({ containerStyles, IconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${IconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
