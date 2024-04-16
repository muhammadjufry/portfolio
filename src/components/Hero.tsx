import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandMedium,
  IconMail,
} from "@tabler/icons-react";
import { Tooltip, Container, Button } from "@mantine/core";
import "../assets/css/hero.css";
import MyProfile from "../assets/images/my_profile.jpg";
import resume from "../assets/Resume.pdf";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="hero">
      <Container>
        <div className="left">
          <h2>Hi! My name is Muhammad Jufry</h2>
          <span className="headline">
            Building Grabtern | Full Stack web developer
          </span>
          <p>
            I am a developer with proven projects and open source, e.g.{" "}
            <a className="link" href="https://github.com/lightdash/lightdash">
              Lightdash
            </a>
            ,{" "}
            <a
              className="link"
              href="https://github.com/codinasion/program/pulls?q=is%3Apr+is%3Aclosed+author%3Amuhammadjufry"
            >
              Codinasion
            </a>
            , and{" "}
            <a
              className="link"
              href="https://github.com/sarvesh4396/freeresourceshub/pull/5"
            >
              Freeresourceshub
            </a>{" "}
            Currently, I am working as a freelancer. My strengths are in
            developing backend and frontend, ensuring their security as well as
            fast response.
          </p>
          <ul className="socialLinks">
            <li>
              <a href="https://www.linkedin.com/in/muhammad-jufry/">
                <IconBrandLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/muhammadjufry/">
                <IconBrandGithub />
              </a>
            </li>
            <li>
              <a href="https://muhammadjufry.medium.com/">
                <IconBrandMedium />
              </a>
            </li>
            <li>
              <Tooltip label="sayyidmuhammad878@gmail.com">
                <IconMail />
              </Tooltip>
            </li>
          </ul>
          <Button
            color="black"
            styles={() => ({
              root: {
                width: "fit-content",
              },
            })}
          >
            <a href={resume} download>
              Download Resume
            </a>
          </Button>
        </div>
        <img src={MyProfile} />
      </Container>
    </section>
  );
}

export default Hero;
