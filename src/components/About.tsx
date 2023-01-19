import Image from "next/image";

import { motion } from "framer-motion";
import { PageInfo } from "typing";
import { urlFor } from "sanity";

interface Props {
  pageInfo: PageInfo;
}

export const About = ({pageInfo}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl  md:text-2xl">
        Acerca de mí
      </h3>
      {/* //TODO: Corregir Imagen */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mx-auto -mb-20 md:mb-0 flex-shrink-0 items-center"
      >
        <Image
          className="w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
          src={urlFor(pageInfo?.profilePic).url()}
          alt="profile"
          width={512}
          height={512}
        />
      </motion.div>
      <div className="space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#FF0149]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};
