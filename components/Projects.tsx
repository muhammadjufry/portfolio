import React from 'react';
import Tilt from 'react-parallax-tilt';

type Props = {};

export default function Projects({}: Props) {
  return (
    <section className="projects" id="projects">
      <h2>My projects</h2>
      <div className="projects-list">
        <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
          <div className="project-card">
            <img
              src="/images/projects/recipes.webp"
              className="project-card-img"
              width="600"
              height="499"
              alt="recipes"
            />
            <div className="projectCardInfo">
              <h2>Recipes</h2>
              <p>
                This is my first project with The Odin Project. This is a
                recipes project that will give the ingredients and how to make
                it.
              </p>
              <div className="projectCardInfoButtons">
                <a
                  href="https://muhammadjufri.github.io/odin-recipes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Live
                </a>
                <a
                  href="https://github.com/MuhammadJufri/odin-recipes"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Repo
                </a>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
          <div className="project-card">
            <img
              src="/images/projects/landingPage.webp"
              className="project-card-img"
              width="600"
              height="449"
              alt="landingPage"
            />
            <div className="projectCardInfo">
              <h2>Landing Page</h2>
              <p>
                This is my second project with completely responsive web design
                and also menu toggle feature with The Odin Project.
              </p>
              <div className="projectCardInfoButtons">
                <a
                  href="https://muhammadjufri.github.io/odin-landingPage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Live
                </a>
                <a
                  href="https://github.com/MuhammadJufri/odin-landingPage"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Repo
                </a>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
          <div className="project-card">
            <img
              src="/images/projects/rockPaperScissors.webp"
              className="project-card-img"
              width="600"
              height="449"
              alt="rockPaperScissors"
            />
            <div className="projectCardInfo">
              <h2>Rock Paper Scissor</h2>
              <p>
                This is rock paper scissors game, On this game you can only play
                against computer and also I created this project using DOM
              </p>
              <div className="projectCardInfoButtons">
                <a
                  href="https://muhammadjufri.github.io/odin-rockPaperScissors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Live
                </a>
                <a
                  href="https://github.com/MuhammadJufri/odin-rockPaperScissors"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Repo
                </a>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
          <div className="project-card">
            <img
              src="/images/projects/etchASketch.webp"
              className="project-card-img"
              width="600"
              height="449"
              alt="etchASketch"
            />
            <div className="projectCardInfo">
              <h2>Etch A Sketch</h2>
              <p>
                This is my paint draw project. And also there is a feature that
                you can draw using rgb color mode and also you can go back to
                black color mode.
              </p>
              <div className="projectCardInfoButtons">
                <a
                  href="https://muhammadjufri.github.io/odin-etch-a-sketch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Live
                </a>
                <a
                  href="https://github.com/MuhammadJufri/odin-etch-a-sketch"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Repo
                </a>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
          <div className="project-card">
            <img
              src="/images/projects/ticTacToe.webp"
              className="project-card-img"
              width="600"
              height="449"
              alt="ticTacToe"
            />
            <div className="projectCardInfo">
              <h2>Tic Tac Toe</h2>
              <p>
                I built this project using Next JS And Typescript, And also On
                this game you can play with your friends or against computer.
              </p>
              <div className="projectCardInfoButtons">
                <a
                  href="https://tic-tac-toe-game2.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Live
                </a>
                <a
                  href="https://github.com/MuhammadJufri/ticTacToe"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Repo
                </a>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
