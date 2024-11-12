"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();

  useEffect(() => {
    // Configuración de Lenis
    const lenis = new Lenis({
      lerp: 0.1, // Controla la suavidad del scroll (valores más bajos son más suaves)
      wheelMultiplier: 1, // Controla la velocidad del scroll
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup al desmontar el componente para evitar fugas de memoria
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.1, duration: 0 }}
        className="min-h-screen">
        {children}
      </motion.main>

      <div
        style={{ height: `${completion}%` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 transition-all duration-700"></div>
    </>
  );
};

export default Template;
