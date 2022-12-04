import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { projectsData } from '../types';

export default function Projects() {
  const { data: projects, error } = useSWR<projectsData[]>(
    '/api/projects/',
    fetcher
  );
  console.log(projects);
  return (
    <section className="projects" id="projects">
      <h2>My projects</h2>
      {error ? (
        <div className="fetchProjectsTextErr">
          Failed to load projects data...
        </div>
      ) : !projects ? (
        <div className="fetchProjectsTextLoad">Loading...</div>
      ) : (
        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index}>
              <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8} key={index}>
                <div className="project-card">
                  <Image
                    src={project.imageUrl}
                    className="project-card-img"
                    width={438}
                    height={326}
                    alt={project.projectName}
                  />
                  <div className="projectCardInfo">
                    <h2>{project.projectName}</h2>
                    <p>{project.projectDescription}</p>
                    <div className="projectCardInfoButtons">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        See Live
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        See Repo
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
