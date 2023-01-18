import Image from "next/image";
import NextLink from "next/link";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { BackgroundCircles } from "./";

interface Props {}

export const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hola, me llamo Martín",
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
        className="relative rounded-full mx-auto object-cover"
        src="https://pps.whatsapp.net/v/t61.24694-24/309137167_821201402630353_2841463782928132152_n.jpg?ccb=11-4&oh=01_AdRUWzNO0iKQxkB_pGYpQYytWELqIpDBNmvvY7l0jmBdZA&oe=63D518E7"
        alt="profile"
        width={128}
        height={128}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#FF0149" />
        </h1>

        <div className="pt-5">
          <NextLink href="#about">
            <button className="heroButton">Acerca de mí</button>
          </NextLink>
          <NextLink href="#experience">
            <button className="heroButton">Experiencia</button>
          </NextLink>
          <NextLink href="#skills">
            <button className="heroButton">Habilidades</button>
          </NextLink>
          <NextLink href="#projects">
            <button className="heroButton">Proyectos</button>
          </NextLink>
        </div>
      </div>
    </div>
  );
};
