import { Briefcase } from "lucide-react";

const parseDate = (dateString) => {
  const [startYear, endYear] = dateString.split(" - ");
  return new Date(endYear || startYear);
};

const qualificationData = [
  {
    title: "Experiencia",
    data: [
      {
        company: "Unielogics",
        role: "Senior Frontend Developer",
        years: "Oct. 2024 - Present",
        description: `
        Led the complete redesign of Unielogics' UX, creating a more intuitive and user-friendly interface aligned with client needs.
        Optimized routing and navigation architecture, improving authentication, auto-redirects, and path structuring.
        Designed and developed new interactive components, enhancing platform usability and operational efficiency.
        Integrated Stripe payment gateway, implementing security best practices and scalable methodologies for transaction management.
        Developed and implemented unit and integration tests to ensure code stability and quality.
        Automated deployment processes using CI/CD, optimizing continuous delivery of new features.
        Applied MVVM design patterns and component modularization to improve maintainability and scalability.
        Ensured compliance with development standards and optimized performance for system stability and scalability.
        `,
        links: [
          { name: "Unielogics Website", url: "https://unielogics.com/home" },
        ],
        images: ["/experience/unielogicswebsite.webp"],
      },
      {
        company: "Unielogics",
        role: "Chrome Extension Developer",
        years: "Oct. 2024 - Feb. 2025",
        description: `
        Designed, developed, and optimized the Unielogics Chrome extension, enhancing functionality and performance.
        Improved user experience and API integration to ensure efficient communication with internal systems.
        Managed the publication and maintenance of the extension in the Chrome Web Store, ensuring compliance with Google's policies.
        `,
        links: [
          {
            name: "Unielogics Chrome Extension",
            url: "https://chromewebstore.google.com/detail/unielogics/bagcekacfgdabdkhamefiohigjiepjpb",
          },
        ],
        images: ["/experience/unielogicsextension.webp"],
      },
      {
        company: "Logistic Enterprises S.A",
        role: "Project Manager",
        years: "Aug. 2022 - Sep. 2023",
        description: `
        Led project management efforts, ensuring the delivery of efficient and optimized solutions that met client objectives.
        Advised teams and companies on selecting technologies and architectures best suited for their needs and long-term goals.
        `,
        links: [],
        images: [],
      },
      {
        company: "BLP S.A.",
        role: "Lead FrontEnd Architect",
        years: "Jan. 2019 - Sep. 2019",
        description: `
        Developed a unified platform of components and tools to accelerate product delivery across the company.
        Implemented CI/CD practices, reducing deployment times by over 80%.
        Led web performance improvements in Shopify by implementing best practices, DataDog monitoring, and strategic enhancements.
        Built a cookie management tool to ensure compliance with user permission consent laws.
        Introduced innovative solutions such as Ship/Show/Ask on GitHub, Rust for compilation speed optimization, parallelized CI jobs, and AWS scaling improvements.
        `,
        links: [],
        images: [],
      },
      {
        company: "Freelancer",
        role: "Full-Stack Developer",
        years: "Apr. 2020 - Present",
        description: `
        Developed intuitive and efficient user interfaces, enhancing user experience and usability in various web applications.
        Designed and developed robust APIs, ensuring smooth communication between frontend and backend.
        Implemented advanced security measures and granular permission control to enhance web application security.
        Improved application performance and scalability, ensuring optimal operation under high user and data loads.
        `,
        links: [],
        images: [],
      },
      {
        company: "Freelancer",
        role: "Front-End Developer",
        years: "Jan. 2018 - Present",
        description: `
        Created and optimized intuitive, accessible user interfaces to improve product interaction.
        Specialized in responsive design, ensuring web applications are accessible across various devices.
        Collaborated with backend teams to integrate APIs and services for seamless communication.
        Implemented optimization techniques to enhance web application speed and performance.
        `,
        links: [],
        images: [],
      },
    ],
  },
];

const Experience = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  const sortedData = [...getData(qualificationData, "Experiencia").data].sort(
    (a, b) => parseDate(b.years) - parseDate(a.years)
  );

  return (
    <section className="section w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-2 px-4">
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <Briefcase className="size-8" />
        Work experience
      </h2>
      <ol className="relative mt-16">
        {sortedData.map((item, index) => {
          const { company, role, years, description, links, images } = item;
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
                  {/* Imágenes con tamaño reducido y efecto hover */}
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images?.length > 0 &&
                      images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${company} preview ${idx}`}
                          className="w-40 h-22 rounded-lg shadow-md transition-all duration-300 hover:scale-x-110 hover:scale-y-90"
                        />
                      ))}
                  </div>
                  {/* Enlaces con nombres personalizados */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {links?.length > 0 &&
                      links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="text-blue-600 dark:text-blue-400 underline flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer">
                          {link.name}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4">
                            <path
                              d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                              stroke="#720303"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      ))}
                  </div>
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
