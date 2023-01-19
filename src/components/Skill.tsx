import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "sanity";
import * as typing from "typing";

interface Props {
  directionLeft?: boolean;
  skill: typing.Skill;
}

export const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          className="rounded-full border border-gray-500 object-cover h-24 w-24
          md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          src={urlFor(skill?.image).url()}
          alt="badge"
          width={100}
          height={100}
        />
      </motion.div>
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24
        md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};
