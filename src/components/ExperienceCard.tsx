import Image from "next/image";

import { motion } from "framer-motion";

interface Props {};

export const ExperienceCard = ({}: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="https://pps.whatsapp.net/v/t61.24694-24/309137167_821201402630353_2841463782928132152_n.jpg?ccb=11-4&oh=01_AdRUWzNO0iKQxkB_pGYpQYytWELqIpDBNmvvY7l0jmBdZA&oe=63D518E7"
          alt="profile"
          width={640}
          height={640}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Titulo</h4>
        <p className="font-bold text-2xl mt-1">Compañia</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10w w-10 rounded-full"
            src="https://media.badgr.com/uploads/badges/issuer_badgeclass_301f5eaa-2b66-438b-b5e6-c3d5bc119b87.png"
            alt="badge"
            width={390}
            height={390}
          />
          <Image
            className="h-10w w-10 rounded-full"
            src="https://media.badgr.com/uploads/badges/issuer_badgeclass_301f5eaa-2b66-438b-b5e6-c3d5bc119b87.png"
            alt="badge"
            width={390}
            height={390}
          />
          <Image
            className="h-10w w-10 rounded-full"
            src="https://media.badgr.com/uploads/badges/issuer_badgeclass_301f5eaa-2b66-438b-b5e6-c3d5bc119b87.png"
            alt="badge"
            width={390}
            height={390}
          />
          <Image
            className="h-10w w-10 rounded-full"
            src="https://media.badgr.com/uploads/badges/issuer_badgeclass_301f5eaa-2b66-438b-b5e6-c3d5bc119b87.png"
            alt="badge"
            width={390}
            height={390}
          />
        </div>

        <p className="uppercase py-5 text-gray-300">Empezo - Termino</p>

        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>AlgoAlgoAlgoAlgoAlgoAlgoAlgoAlgoAlgo</li>
          <li>AlgoAlgoAlgoAlgoAlgoAlgoAlgoAlgoAlgo</li>
          <li>AlgoAlgoAlgoAlgoAlgoAlgoAlgoAlgoAlgo</li>
        </ul>
      </div>
    </article>
  );
};
