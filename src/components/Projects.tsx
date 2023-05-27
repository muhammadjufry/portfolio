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
              projectLiveLink="https://mastore-frontend.netlify.app/"
              projectRepoLink="https://github.com/muhammadjufry/mastore"
              image={MaStoreImg}
              title="MA STORE"
              oText="( 75% on progress )"
              description="An E-commerce where you buy and sell from another online shop like amazon, ebay,
              flipkart, etc"
              projectSkills={[
                "HTML5",
                "CSS3",
                "React.js",
                "PostgreSQL",
                "Nodemailer",
                "RESPONSIVE WEB DESIGN",
              ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://ebay-clone-muhammad.vercel.app/"
              projectRepoLink="https://github.com/muhammadjufry/ebay-clone"
              image={EbayImg}
              title="Ebay Clone"
              description="A cryptocurrency Ecommerce where you can add and buy product using your Metamask account extension"
              projectSkills={[
                "HTML5",
                "CSS3",
                "TypeScript",
                "Thirdweb",
                "Tailwind CSS",
                "React.js",
                "RESPONSIVE WEB DESIGN",
              ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://tic-tac-toe-game2.vercel.app/"
              projectRepoLink="https://github.com/muhammadjufry/tic-tac-toe"
              image={TicTacToeImg}
              title="Tic Tac Toe"
              description="On this game you can play with your friends or against computer with completely
              responsive web design"
              projectSkills={[
                "HTML5",
                "CSS3",
                "Typescript",
                "CSS",
                "Next.js",
                "React.js",
                "RESPONSIVE WEB DESIGN",
              ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://muhammadjufry.github.io/odin-landingPage/"
              projectRepoLink="https://github.com/muhammadjufry/odin-landingPage"
              image={LandingPageImg}
              title="Landing Page"
              description="Responsive landing page project that had banner, some information, and some other sections"
              projectSkills={[
                "HTML5",
                "CSS3",
                "JAVASCRIPT",
                "DOM",
                "RESPONSIVE WEB DESIGN",
              ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://muhammadjufry.github.io/Library/"
              projectRepoLink="https://github.com/muhammadjufry/Library"
              image={LibraryImg}
              title="Library Book"
              description="This is a website for user to list their book but it won't save in localstorage it will save in array type"
              projectSkills={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "DOM",
                "RESPONSIVE WEB DESIGN",
              ]}
            />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Projects;
