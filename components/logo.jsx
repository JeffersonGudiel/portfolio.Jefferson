import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="logo.svg"
        width={54}
        height={54}
        priority
        alt="logo"
        style={{ objectFit: "contain" }} // Agregado para asegurar que la imagen se ajuste correctamente
      />
    </Link>
  );
};

export default Logo;
