import { Container } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import MaStoreImg from "../assets/images/projects/ma_store.png";
import EbayImg from "../assets/images/projects/ebay.png";
import TicTacToeImg from "../assets/images/projects/tic-tac-toe.png";
import LandingPageImg from "../assets/images/projects/landing-page.png";
import LibraryImg from "../assets/images/projects/library.png";
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
              projectLiveLink="https://mastore-project.netlify.app/"
              projectRepoLink="https://github.com/muhammadjufry/mastore"
              image={MaStoreImg}
              title="MA STORE"
              description="Simple E-commerce website design with more than 15+ pages"
              projectSkills={["TypeScript", "Vite.js", "styled-components"]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://tic-tac-toe-project01.netlify.app/"
              projectRepoLink="https://github.com/muhammadjufry/tic-tac-toe"
              image={TicTacToeImg}
              title="Tic Tac Toe"
              description="Simple Tic Tac Toe game"
              projectSkills={["Typescript", "CSS", "Next.js"]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://muhammadjufry.github.io/odin-landingPage/"
              projectRepoLink="https://github.com/muhammadjufry/odin-landingPage"
              image={LandingPageImg}
              title="Landing Page"
              description="Responsive simple landing page"
              projectSkills={["HTML", "CSS", "JavaScript"]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://muhammadjufry.github.io/Library/"
              projectRepoLink="https://github.com/muhammadjufry/Library"
              image={LibraryImg}
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
