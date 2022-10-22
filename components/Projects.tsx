import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { projectsData } from '../types';

type Props = {
  projects: projectsData[];
};

export default function Projects({ projects }: Props) {
  return (
    <section className="projects" id="projects">
      <h2>My projects</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index}>
            <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8} key={index}>
              <div className="project-card">
                <div
                  style={{
                    display: 'block',
                    borderBottom: '1px solid black',
                  }}
                >
                  <Image
                    src={project.imageUrl}
                    className="project-card-img"
                    width={438}
                    height={326}
                    layout="responsive"
                    objectFit="cover"
                    alt={project.projectName}
                  />
                </div>
                <div className="projectCardInfo">
                  <h2>{project.projectName}</h2>
                  <p>{project.projectDescription}</p>
                  <div className="projectCardInfoButtons">
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      See Live
                    </a>
                    <a href={project.repoLink} target="_blank" rel="noreferrer">
                      See Repo
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </li>
        ))}
      </ul>
    </section>
  );
}
