import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import Socials from "./Socials";

const Hero = () => {
  return (
    <section className=" py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl ">
      <div className=" container mx-auto ">
        <div className=" flex justify-between gap-x-8 ">
          <div
            className=" flex max-w-[600px] flex-col justify-center 
          mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="flex gap-4 mb-4">
              <img
                className=" hidden xl:flex relative rounded-full uppercase mb-4 shadow-lg size-16"
                src="https://avatars.githubusercontent.com/u/128022784?v=4"></img>
              <a
                href="https://www.linkedin.com/in/jefferson-alexander/"
                target="_blank"
                rel="noopener"
                className="flex uppercase font-semibold mb-4 items-center justify-center transition md:justify-between md:hover:scale-105max-w-[490px] mx-auto xl:mx-0">
                <div className="flex items-center">
                  <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                    <span
                      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                  bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                    <div
                      className="inline-flex items-center justify-center w-full px-3 py-1 text-sm
                   text-dark-800 bg-green-150 rounded-full cursor-pointer dark:bg-gray-800
                   dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                      Available to work
                    </div>
                  </span>
                </div>
              </a>
            </div>
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </div>
            <h1 className="h1 mb-4 -mt-4">Hey, I'm Jefferson Gudiel</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 ">
              + 6 years of experience as{" "}
              <strong className="text-yellow-600 dark:text-yellow-100 font-normal">
                Full Stack Developer specialized in Frontend
              </strong>
              . Expert in creating optimized and functional user interfaces,
              combining deep technical knowledge with a focus on performance and
              user experience.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">
              <Link
                href="mailto:jeffersongudiel2003@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>

              <Button className="gap-x-2">
                <a
                  href="https://drive.google.com/drive/folders/1nRMUfgGgLMLv2vklUNmw82Vowcs9XOvv?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  Download CV
                </a>
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
