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
            Technical Engineer at Grabtern | Full Stack web developer
          </span>
          <p>
            Impact-oriented Full Stack developer in creating many frontend
            projects using various technology and also helping people to fix
            their projects using HTML5, CSS, JavaScript and AngularJS and also I
            have been worked at Amupedia as Web developer designing the frontend
            system complete from end to end with completely responsive web
            design and fast perfomance
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
