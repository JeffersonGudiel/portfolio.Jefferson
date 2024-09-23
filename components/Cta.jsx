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
        Sobre mí
      </h2>
      <article className="flex flex-col items-center justify-center gap-8 text-gray-950 dark:text-gray-300 md:flex-row">
        <div className="order-2 md:order-1 space-y-4 text-pretty font-mono">
          <p>
            Me Jefferson pero mis amigos me llaman jeff. Empecé en la
            programación cuando tenía 16 años. Actualmente me dedico a la
            realización{" "}
            <strong className="text-yellow-600 dark:text-yellow-100 font-normal">
              proyectos freelancer con visión para fundar mi start-up
            </strong>
            .
          </p>
          <p>
            Algunos de mis éxitos incluyen{" "}
            <strong className="text-yellow-600 dark:text-yellow-100 font-normal">
              Desarrollo de una plataforma unificada de componentes y
              herramientas
            </strong>
            , mejorando la eficiencia y flexibilidad en el desarrollo.
          </p>
          <p>
            Como creador de contenido,{" "}
            <strong className="text-yellow-600 dark:text-yellow-100 font-normal">
              cuento con varios reconocimentos tanto educativos como laborales{" "}
              <em className="italic">
                Premio a la Contribución Destacada, Premio al Mérito Académico y
                Cum Laude
              </em>{" "}
              a lo largo de mi carrera
            </strong>
            . Mi objetivo es mejorar la empleabilidad de la comunidad hispana y
            el acceso sin restricciones a contenido de calidad.
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
