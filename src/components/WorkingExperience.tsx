import { motion } from "framer-motion";
import { Experience } from "typing";
import { ExperienceCard } from "./ExperienceCard";

interface Props {
  experiences: Experience[];
}

export const WorkingExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiencias
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FF0149]"
      >
        {
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience}/>
          ))
        }
      </div>
    </motion.div>
  );
};
