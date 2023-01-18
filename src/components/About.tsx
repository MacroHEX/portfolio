import Image from "next/image";

import { motion } from "framer-motion";

interface Props {}

export const About = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Acerca de mí
      </h3>
      {/* //TODO: Corregir Imagen */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mx-auto -mb-20 md:mb-0 flex-shrink-0"
      >
        <Image
          className="w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
          src="https://pps.whatsapp.net/v/t61.24694-24/309137167_821201402630353_2841463782928132152_n.jpg?ccb=11-4&oh=01_AdRUWzNO0iKQxkB_pGYpQYytWELqIpDBNmvvY7l0jmBdZA&oe=63D518E7"
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit
          voluptates laboriosam tempora ullam magnam sequi porro ea omnis quas
          minus distinctio, tenetur accusamus aliquid culpa, unde a quos.
          Quibusdam? Ratione quam perspiciatis ea dolore! Ullam ratione error
          tempora necessitatibus, est possimus perferendis. Cum, sunt natus.
          Molestias, impedit! Repudiandae nesciunt eius magnam laborum possimus
          quisquam suscipit minus nam placeat reprehenderit? Ipsum voluptatum ut
          hic ad rem alias, reprehenderit recusandae ipsa ducimus ullam,
          officiis tenetur dicta ipsam! Repudiandae impedit quos in nostrum et
          optio, ipsum, amet modi iusto autem explicabo voluptatem. Quas
          assumenda alias perferendis? Repellat ut nobis quos. Ipsa iste
          corrupti, tempore minima perferendis neque, eius voluptatum blanditiis
          quidem temporibus molestiae illum ea aliquid eum labore numquam
        </p>
      </div>
    </motion.div>
  );
};
