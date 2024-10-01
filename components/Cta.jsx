const Cta = () => {
  return (
    <section
      id="sobre-mi"
      data-section="sobre-mi"
      className="w-full mx-auto container lg:max-w-4xl md:max-w-2xl scroll-m-20">
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
        <svg
          className="w-6 h-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
        About me
      </h2>
      <article className="flex flex-col items-center justify-center gap-8 text-gray-950 dark:text-gray-300 md:flex-row">
        <div className="order-2 md:order-1 space-y-4 text-pretty font-mono">
          <p>
            My name is Jefferson, but my friends call me Jeff. I started
            programming when I was 16. I am currently involved in creating{" "}
            <strong className="text-yellow-600 dark:text-yellow-100 font-normal">
              freelance projects with a vision to found my Start-Up
            </strong>
            .
          </p>
          <p>
            Some of my successes include{" "}
            <strong className="text-yellow-600 dark:text-yellow-100 font-normal">
              Development of a unified platform of components and tools
            </strong>
            , improving efficiency and flexibility in development.
          </p>
          <p>
            As an independent and dependent content creator,{" "}
            <strong className="text-yellow-600 dark:text-yellow-100 font-normal">
              I have several educational and work-related recognitions.{" "}
              <em className="italic">
                Premio a la Contribución Destacada, Premio al Mérito Académico y
                Cum Laude
              </em>{" "}
              Throughout my career
            </strong>
            . My goal is to improve community employability and unrestricted
            access.
          </p>
        </div>
        <img
          src="/about/developer.webp"
          alt="Jefferson Gudiel"
          className="order-1 md:order-2 w-64 h-64 object-cover p-1 rotate-3 lg:p-2 rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
        />
      </article>
    </section>
  );
};

export default Cta;
