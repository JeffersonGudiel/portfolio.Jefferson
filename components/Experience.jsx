import { Briefcase } from "lucide-react";

const qualificationData = [
  {
    title: "Experiencia",
    data: [
      {
        company: "IT - BLP abogados S.A",
        role: "Lead FrontEnd Architect",
        years: "Jun. 2020 - Jan. 2021",
        description: `
    I developed a unified platform of components and tools to accelerate product delivery in the enterprise.
I implemented CI/CD, reducing deployment times by over 80%.
I led web performance improvements in products like Shopify, introducing best practices and strategies based on DataDog.
I built a cookie management tool to comply with user consent laws.
I introduced innovative solutions like Ship/Show/Ask on GitHub, the use of Rust to speed up builds, and optimizations on AWS to improve scalability.
        `,
      },
      {
        company: "Freelancer",
        role: "Project Manager",
        years: "Aug. 2022 - Jan. 2023",
        description: `
    Distinguished experience in project management, ensuring the delivery of optimized solutions that meet client objectives.
Expert in advising teams and companies in choosing the right technologies and architectures for their needs and long-term objectives.
  `,
      },

      {
        company: "Freelancer",
        role: "Full-Stack Developer",
        years: "Apr. 2020 - present",
        description: `
    Expert in creating intuitive interfaces and improving usability in web applications.
Experience in designing and developing robust APIs for efficient communication between frontend and backend.
Specialist in securing web applications with advanced security measures and granular permission control.
Experience in optimizing application performance and scalability to handle high user and data loads.
  `,
      },

      {
        company: "Freelancer",
        role: "Front-End Developer",
        years: "Jan. 2019 - Mar. 2020",
        description: `
   Creation and optimization of intuitive and accessible user interfaces.
Responsive design expert to ensure usability on multiple devices.
Collaboration with backend teams to integrate APIs and services.
Implementation of techniques to improve the speed and performance of web applications.
  `,
      },
    ],
  },
];

const Experience = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-2 px-4">
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <Briefcase className="size-8" />
        Work experience
      </h2>
      <ol className="relative mt-16">
        {getData(qualificationData, "Experiencia").data.map((item, index) => {
          const { company, role, years, description, link } = item;
          return (
            <li key={index}>
              <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
                <div className="relative pb-12 md:col-span-2">
                  <div className="sticky top-0 group">
                    <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl w-[11px] h-[11px] group-hover:translate-y-[84px] transition-transform duration-500">
                      •
                    </span>
                    <h3 className="text-xl font-bold text-yellow-600">
                      {role}
                    </h3>
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                      {company}
                    </h4>
                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                      {years}
                    </time>
                  </div>
                </div>
                <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                  {description}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
