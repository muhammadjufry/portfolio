import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { projectsData } from '../types';
import { GetServerSideProps } from 'next';
const Navbar = dynamic(() => import('./../components/Navbar'));
const Banner = dynamic(() => import('../components/Banner'));
const Projects = dynamic(() => import('../components/Projects'));
const About = dynamic(() => import('../components/About'));
const Contact = dynamic(() => import('../components/Contact'));

export const config = {
  unstable_runtimeJS: true,
};

type Props = {
  projects: projectsData[];
};

const Home = ({ projects }: Props) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="This is my portfolio project, In this project i showed my recent projects"
        />
        <meta name="author" content="Sayyid Muhammad A" />
        <meta
          name="keyword"
          content="Portfolio, Portfolio Project, Portfolio using HTML CSS and JavaScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Sayyid Muhammad A</title>
      </Head>

      {/* Navbar */}

      <Navbar />

      {/* Main */}

      <main>
        {/* Banner */}

        <Banner />

        {/* Projects */}

        <Projects projects={projects} />

        {/* About */}

        <About />

        {/* Contact */}

        <Contact />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const res = await fetch('http://localhost:3000/api/projects');
  const projects = await res.json();

  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  return {
    props: {
      projects,
    },
  };
};
