import Image from "next/image";
import NextLink from "next/link";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "sanity";
import { PageInfo } from "typing";

import { BackgroundCircles } from "./";

interface Props {
  pageInfo: PageInfo;
}

export const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hola, me llamo ${pageInfo?.name}`,
      "Aprendo-lo-que-sea.tsx",
      "<AunqueNoTengaTiempo />",
    ],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className="w-32 h-32 relative rounded-full mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile"
        width={512}
        height={512}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#FF0149" />
        </h1>

        <div className="pt-5">
          <NextLink href="#about" legacyBehavior>
            <button className="heroButton">Acerca de mí</button>
          </NextLink>
          <NextLink href="#experience" legacyBehavior>
            <button className="heroButton">Experiencia</button>
          </NextLink>
          <NextLink href="#skills" legacyBehavior>
            <button className="heroButton">Habilidades</button>
          </NextLink>
          <NextLink href="#projects" legacyBehavior>
            <button className="heroButton">Proyectos</button>
          </NextLink>
        </div>
      </div>
    </div>
  );
};
