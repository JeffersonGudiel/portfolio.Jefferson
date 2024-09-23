import { Briefcase } from "lucide-react";

const qualificationData = [
  {
    title: "Experiencia",
    data: [
      {
        company: "Informática - BLP abogados S.A",
        role: "Lead FrontEnd Architect",
        years: "Jun. 2020 - Ene. 2021",
        description: `
    Desarrollé una plataforma unificada de componentes y herramientas para acelerar la entrega de productos en la empresa.
    Implementé CI/CD, reduciendo los tiempos de despliegue en más del 80%.
    Lideré mejoras de rendimiento web en productos como Shopify, introduciendo mejores prácticas y estrategias basadas en DataDog.
    Construí una herramienta de gestión de cookies para cumplir con las leyes de consentimiento de usuarios.
    Introduje soluciones innovadoras como Ship/Show/Ask en GitHub, el uso de Rust para acelerar compilaciones, y optimizaciones en AWS para mejorar la escalabilidad.
        `,
      },
      {
        company: "Freelancer",
        role: "Project Manager",
        years: "ago. 2022 - Ene. 2023",
        description: `
    Experiencia destacada en dirección y gestión de proyectos, asegurando la entrega de soluciones optimizadas que cumplen con los objetivos del cliente.
    Experto en asesorar a equipos y empresas en la elección de tecnologías y arquitecturas adecuadas para sus necesidades y objetivos a largo plazo.
  `,
      },

      {
        company: "Freelancer",
        role: "Desarrollador FullStack",
        years: "Abr. 2020 - presente",
        description: `
    Experto en crear interfaces intuitivas y mejorar la usabilidad en aplicaciones web.
    Experiencia en diseñar y desarrollar APIs robustas para una comunicación eficiente entre frontend y backend.
    Especialista en asegurar aplicaciones web con medidas de seguridad avanzadas y control granular de permisos.
    Experiencia en optimizar el rendimiento y la escalabilidad de aplicaciones para manejar altas cargas de usuarios y datos.
  `,
      },

      {
        company: "Freelancer",
        role: "Desarrollador FrontEnd",
        years: "Ene. 2019 - Mar. 2020",
        description: `
    Creación y optimización de interfaces de usuario intuitivas y accesibles.
    Experto en diseño responsivo para garantizar usabilidad en múltiples dispositivos.
    Colaboración con equipos backend para integrar APIs y servicios.
    Implementación de técnicas para mejorar la velocidad y rendimiento de aplicaciones web.
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
        Experiencia laboral
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
