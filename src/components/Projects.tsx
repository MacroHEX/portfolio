import Image from "next/image";

import { motion } from "framer-motion";

interface Props {}

export const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Proyectos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project.valueOf()}
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg"
                alt="project_image"
                width={600}
                height={600}
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#FF0149]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                &nbsp;Something
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, nesciunt? Cum perspiciatis voluptates perferendis? Quo
                excepturi, deserunt enim repudiandae cum, ex error beatae fuga
                sequi rerum dolores velit, eum laboriosam! Fuga aliquid
                obcaecati sint eum! Rem sed, doloribus molestias vitae id
                maiores magni consequuntur culpa, corporis sunt expedita
                officiis ab? Accusamus nihil veritatis odio consequatur quaerat
                vitae eos consectetur recusandae.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#FF0149]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};
