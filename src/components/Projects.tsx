import { Container } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import "../assets/css/projects.css";

type Props = {};

function Projects({}: Props) {
  return (
    <section className="projects" id="projects">
      <Container mb={30}>
        <h3>Here's some of my projects that I have created:</h3>
        <br />
        <ul className="projectLists">
          <li>
            <ProjectCard
              projectLiveLink="https://jamalipay.com/"
              projectRepoLink="https://github.com/muhammadjufry/jamalipay"
              image="/project-images/jamalipay.png"
              title="Jamali Pay"
              description="Simple SAAS Landing Page"
              projectSkills={[
                "TypeScript",
                "Next.js",
                "Prisma",
                "PostgreSQL",
                "TailwindCSS",
              ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://mastore-project.netlify.app/"
              projectRepoLink="https://github.com/muhammadjufry/mastore"
              image="/project-images/ma_store.png"
              title="MA STORE"
              description="Simple E-commerce website design with more than 15+ pages"
              projectSkills={["TypeScript", "Vite.js", "styled-components"]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://tic-tac-toe-project01.netlify.app/"
              projectRepoLink="https://github.com/muhammadjufry/tic-tac-toe"
              image="/project-images/tic-tac-toe.png"
              title="Tic Tac Toe"
              description="Simple Tic Tac Toe game"
              projectSkills={["Typescript", "CSS", "Next.js"]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://muhammadjufry.github.io/odin-landingPage/"
              projectRepoLink="https://github.com/muhammadjufry/odin-landingPage"
              image="/project-images/landing-page.png"
              title="Landing Page"
              description="Responsive simple landing page"
              projectSkills={["HTML", "CSS", "JavaScript"]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://muhammadjufry.github.io/Library/"
              projectRepoLink="https://github.com/muhammadjufry/Library"
              image="/project-images/library.png"
              title="Library Book"
              description="Simple Library book website"
              projectSkills={["HTML", "CSS", "JavaScript"]}
            />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Projects;
