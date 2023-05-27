import React from "react";
import { Container } from "@mantine/core";
import "../assets/css/opensourceprojects.css";
import OpenSourceProjectCard from "./OpenSourceProjectCard";
import lightdashLogo from "../assets/images/opensource_projects_logo/lightdash.png";
import amupediaLogo from "../assets/images/opensource_projects_logo/amupedia.png";
import grabternLogo from "../assets/images/opensource_projects_logo/grabtern.jpg";
import amplicationLogo from "../assets/images/opensource_projects_logo/amplication.png";
import freeresourceshubLogo from "../assets/images/opensource_projects_logo/freeresourceshubLogo.png";

type Props = {};

function OpenSourceProjects({}: Props) {
  return (
    <section className="opensourceprojects" id="opensourceprojects">
      <Container mb={30}>
        <h3>Here some projects that I have open source to it:</h3>
        <br />
        <ul className="opensourceprojectsLists">
          <li>
            <OpenSourceProjectCard
              repoName="Lightdash"
              repoDescription="Open source BI for teams that move fast ⚡️"
              repoLink="https://github.com/lightdash/lightdash"
              repoLive="https://lightdash.com"
              howManyPr="1"
              logo={lightdashLogo}
              prLink="https://github.com/lightdash/lightdash/pull/5028"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="Grabtern"
              repoDescription="Connecting the mentors and creating a network"
              repoLink="https://github.com/anmode/grabtern-frontend"
              repoLive="https://grabtern.com"
              howManyPr="30"
              logo={grabternLogo}
              prLink="https://github.com/anmode/grabtern-frontend/pulls?q=is%3Apr+is%3Aclosed+author%3Amuhammadjufry"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="Amupedia"
              repoDescription="Open source website helping needed students"
              repoLink="https://github.com/amupedia2021/Project-Amupedia"
              repoLive="https://amupedia.com"
              howManyPr="5"
              logo={amupediaLogo}
              prLink="https://github.com/amupedia2021/Project-Amupedia/pulls?q=is%3Apr+is%3Aclosed+author%3Amuhammadjufry"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="freeresourceshub"
              repoDescription="The largest organized list of free tools for..."
              repoLink="https://github.com/sarvesh4396/freeresourceshub"
              repoLive="https://freeresourceshub.netlify.app/"
              howManyPr="1"
              logo={freeresourceshubLogo}
              prLink="https://github.com/sarvesh4396/freeresourceshub/pull/5"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="Amplication"
              repoDescription="Amplication's website!"
              repoLink="https://github.com/amplication/amplication-site"
              repoLive="https://amplication.com"
              howManyPr="1"
              logo={amplicationLogo}
              prLink="https://github.com/amplication/amplication-site/pull/231"
            />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default OpenSourceProjects;
