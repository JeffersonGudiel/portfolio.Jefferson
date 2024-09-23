import Social from "./Socials";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Social
            containerStyles="flex gap-x-6 mx:auto xl:mx-0 mb-4"
            IconsStyles="text-primary dark-text-white/70 text-[20px] dark:text-primary"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Jefferson. Casi todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
