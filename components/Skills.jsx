import React from "react";

const Badge = ({ text, icon }) => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
    {icon && <img src={icon} alt={text} className="w-4 h-4" />}
    <span className="text-white font-medium">{text}</span>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Front-End",
      data: [
        {
          name: "HTML",
          className: "bg-gradient-to-r from-orange-400 to-orange-600",
          imgPath: "/about/front-end/html5.svg",
        },
        {
          name: "CSS",
          className: "bg-gradient-to-r from-blue-400 to-blue-600",
          imgPath: "/about/front-end/css.svg",
        },
        {
          name: "JavaScript",
          className: "bg-gradient-to-r from-yellow-400 to-yellow-600",
          imgPath: "/about/front-end/javascript.svg",
        },
        {
          name: "React.js",
          className: "bg-gradient-to-r from-sky-400 to-sky-600",
          imgPath: "/about/front-end/react.svg",
        },
        {
          name: "Next.js",
          className: "bg-gradient-to-r from-gray-800 to-gray-900",
          imgPath: "/about/front-end/nextjs_icon_dark.svg",
        },
        {
          name: "Tailwind CSS",
          className: "bg-gradient-to-r from-cyan-400 to-cyan-600",
          imgPath: "/about/front-end/tailwindcss.svg",
        },
        {
          name: "TypeScript",
          className: "bg-gradient-to-r from-blue-400 to-blue-600",
          imgPath: "/about/front-end/typescript.svg",
        },
        {
          name: "Bootstrap",
          className: "bg-gradient-to-r from-purple-300 to-purple-600",
          imgPath: "/about/front-end/bootstrap.svg",
        },
        {
          name: "Sass",
          className: "bg-gradient-to-r from-pink-300 to-pink-600",
          imgPath: "/about/front-end/sass.svg",
        },
      ],
    },
    {
      title: "Back-End",
      data: [
        {
          name: "Node.js",
          className: "bg-gradient-to-r from-green-500 to-green-700",
          imgPath: "/about/Back-end/nodejs.svg",
        },
        {
          name: "Prisma",
          className: "bg-gradient-to-r from-slate-400 to-slate-600",
          imgPath: "/about/Back-end/prisma.svg",
        },
        {
          name: "Nest.js",
          className: "bg-gradient-to-r from-rose-800 to-rose-900",
          imgPath: "/about/Back-end/nestjs.svg",
        },
        {
          name: "Express.js",
          className: "bg-gradient-to-r from-gray-300 to-gray-500",
          imgPath: "/about/Back-end/Expressjs.svg",
        },
        {
          name: "Python",
          className: "bg-gradient-to-r from-sky-500 to-sky-700",
          imgPath: "/about/Back-end/python.svg",
        },
      ],
    },
    {
      title: "database",
      data: [
        {
          name: "MongoDB",
          className: "bg-gradient-to-r from-green-600 to-green-800",
          imgPath: "/about/database/mongodb.svg",
        },
        {
          name: "MySQL",
          className: "bg-gradient-to-r from-sky-400 to-sky-600",
          imgPath: "/about/database/mysql.svg",
        },
        {
          name: "PostgreSQL",
          className: "bg-gradient-to-r from-sky-500 to-sky-700",
          imgPath: "/about/database/postgresql.svg",
        },
        {
          name: "SQLite",
          className: "bg-gradient-to-r from-sky-400 to-sky-600",
          imgPath: "/about/database/sqlite.svg",
        },
      ],
    },
    {
      title: "cloud",
      data: [
        {
          name: "AWS",
          className: "bg-gradient-to-r from-yellow-600 to-yellow-800",
          imgPath: "/about/cloud/aws.svg",
        },
        {
          name: "Cloudflare",
          className: "bg-gradient-to-r from-orange-700 to-orange-900",
          imgPath: "/about/cloud/cloudflare.svg",
        },
        {
          name: "Vercel",
          className: "bg-gradient-to-r from-zinc-400 to-zinc-600",
          imgPath: "/about/cloud/vercel.svg",
        },
        {
          name: "DigitalOcean",
          className: "bg-gradient-to-r from-blue-600 to-blue-800",
          imgPath: "/about/cloud/digitalocean.svg",
        },
        {
          name: "Netlify",
          className: "bg-gradient-to-r from-teal-600 to-teal-800",
          imgPath: "/about/cloud/netlify.svg",
        },
        {
          name: "Supabase",
          className: "bg-gradient-to-r from-teal-500 to-teal-700",
          imgPath: "/about/cloud/supabase.svg",
        },
      ],
    },
    {
      title: "Tools",
      data: [
        {
          name: "Git",
          className: "bg-gradient-to-r from-red-700 to-red-900",
          imgPath: "/about/Tools/git.svg",
        },
        {
          name: "Github",
          className: "bg-gradient-to-r from-gray-300 to-gray-500",
          imgPath: "/about/Tools/Github.svg",
        },
        // {
        //   name: "VSCode",
        //   className: "bg-gradient-to-r from-sky-700 to-sky-900",
        //   imgPath: "/about/Tools/vscode.svg",
        // },
        {
          name: "Slack",
          className: "bg-gradient-to-r from-violet-500 to-violet-700",
          imgPath: "/about/Tools/slack.svg",
        },
        {
          name: "Notion",
          className: "bg-gradient-to-r from-neutral-500 to-neutral-700",
          imgPath: "/about/Tools/notion.svg",
        },
        {
          name: "Figma",
          className: "bg-gradient-to-r from-rose-600 to-rose-800",
          imgPath: "/about/Tools/figma.svg",
        },
        {
          name: "Canva",
          className: "bg-gradient-to-r from-indigo-500 to-indigo-700",
          imgPath: "/about/Tools/canva.svg",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col justify-center relative z-10 items-center p-4 md:p-6 lg:p-8">
      <div className="relative flex flex-col justify-between items-center w-full max-w-[1100px] gap-6 md:gap-8">
        <h1 className="text-center font-semibold text-[42px] mt-5 text-theme-text-primary dark:text-theme-text-primary-dark md:text-[32px] md:mt-3">
          Skills
        </h1>
        <div className="w-full flex flex-wrap gap-6 justify-center">
          {skillData.map((category) => {
            const { title, data } = category;

            return (
              <div
                key={title}
                className={`w-full max-w-[500px] bg-gradient-to-r ${
                  title === "Front-End"
                    ? "from-white/20 to-gray-200/80 dark:from-gray-900/20 dark:to-gray-800/50"
                    : title === "Back-End"
                    ? "from-white/20 to-gray-200/80 dark:from-gray-900/20 dark:to-gray-800/50"
                    : title === "database"
                    ? "from-white/20 to-gray-200/80 dark:from-gray-900/20 dark:to-gray-800/50"
                    : title === "cloud"
                    ? "from-white/20 to-gray-200/80 dark:from-gray-900/20 dark:to-gray-800/50"
                    : title === "Tools"
                    ? "from-white/20 to-gray-200/80 dark:from-gray-900/20 dark:to-gray-800/50"
                    : ""
                } border rounded-xl p-4 md:max-w-[400px] md:p-4 sm:max-w-[330px] sm:p-3`}>
                <h2 className="text-[28px] font-semibold text-theme-text-secondary dark:text-theme-text-secondary-dark mb-4 text-center">
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </h2>
                <div className="flex flex-wrap gap-4 justify-center mb-4">
                  {data.map((item, index) => {
                    const { name, imgPath, className } = item;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2 border border-gray-200 rounded-lg p-2 shadow-md dark:border-gray-800 ${className}`}>
                        <img
                          src={imgPath}
                          width={25}
                          height={25}
                          alt={name}
                          className="w-6 h-6"
                        />
                        <div className="font-medium text-white">{name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
