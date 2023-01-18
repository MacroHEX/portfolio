import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  directionLeft?: boolean;
}

export const Skill = ({ directionLeft }: Props) => {
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
          src="https://media.badgr.com/uploads/badges/issuer_badgeclass_301f5eaa-2b66-438b-b5e6-c3d5bc119b87.png"
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
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};
