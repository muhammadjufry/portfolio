import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Navbar from './../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is my portfolio project, In this project i showed my recent projects"
        />
        <meta name="author" content="MuhammadJufri" />
        <meta
          name="keyword"
          content="Portfolio, Portfolio Project, Portfolio using HTML CSS and JavaScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>Portfolio Project</title>
      </Head>

      {/* Navbar */}

      <Navbar />

      {/* Main */}

      <main>
        {/* Banner */}

        <Banner />

        {/* Projects */}

        <Projects />

        {/* About */}

        <About />

        {/* Contact */}

        <Contact />
      </main>
    </div>
  );
};

export default Home;
