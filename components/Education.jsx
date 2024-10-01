import { Briefcase } from "lucide-react";

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Galileo University of Guatemala",
        qualification: "Mechatronics Engineering",
        years: "Feb 2021 - present",
        description: `
    Engineering training with a focus on the integration of mechanical and electronic systems, programming, and design of automated systems.
Honors: Honors in the subject of programming.
  `,
      },

      {
        university: "The Alamo School",
        qualification: "Bachelor in Computer Science",
        years: "Jan. 2019 - Oct. 2020",
        description: `
   Comprehensive preparation in computer science, including programming, networks, and operating systems. Bachelor's Degree in Computer Science, Guatemalan. Honors: Honor to the Outstanding Student in the area of Computing.
  `,
      },
    ],
  },
];

const Education = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-12 px-4">
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <Briefcase className="size-8" />
        Education
      </h2>
      <ol className="relative mt-16">
        {getData(qualificationData, "education").data.map((item, index) => {
          const { university, qualification, years, description } = item;
          return (
            <li key={index}>
              <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
                <div className="relative pb-12 md:col-span-2">
                  <div className="sticky top-0 group">
                    <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl w-[11px] h-[11px] group-hover:translate-y-[84px] transition-transform duration-500">
                      •
                    </span>
                    <h3 className="text-xl font-bold text-yellow-600">
                      {qualification}
                    </h3>
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                      {university}
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

export default Education;
