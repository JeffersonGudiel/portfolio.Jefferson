"use client";

import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();

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
