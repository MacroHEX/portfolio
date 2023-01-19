import { GetStaticProps } from "next";

import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";

import {
  About,
  ContactMe,
  Header,
  Hero,
  Projects,
  Skills,
  WorkingExperience,
} from "../components";

import { PageInfo, Experience, Skill, Project, Social } from "typing";

import {
  fetchPageInfo,
  fetchExperiences,
  fetchSkills,
  fetchProjects,
  fetchSocial,
} from "@/utils";

interface Props {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FF0149]"
    >
      <Head>
        <title>Martin&apos;s Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkingExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <NextLink href="#hero" legacyBehavior>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://cdn.pixabay.com/photo/2013/07/12/15/53/home-150499_960_720.png"
              alt="home"
              width={300}
              height={300}
            />
          </div>
        </footer>
      </NextLink>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 86400,
  };
};
