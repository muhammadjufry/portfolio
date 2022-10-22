// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { projectsData } from '../../types';

const projects: projectsData[] = [
  {
    projectName: 'Tic Tac Toe',
    projectDescription: 'I built this project using Next JS And Typescript, And also On this game you can play with your friends or against computer.',
    liveLink: 'https://tic-tac-toe-game2.vercel.app/',
    repoLink: 'https://github.com/MuhammadJufri/ticTacToe',
    imageUrl: '/images/projects/ticTacToe.webp'
  },
  {
    projectName: 'Etch A Sketch',
    projectDescription: 'This is my paint draw project. And also there is a feature that you can draw using rgb color mode and also you can go back to black color mode.',
    liveLink: 'https://muhammadjufri.github.io/odin-etch-a-sketch/',
    repoLink: 'https://github.com/MuhammadJufri/odin-etch-a-sketch',
    imageUrl: '/images/projects/etchASketch.webp'
  },
  {
    projectName: 'Rock Paper Scissor',
    projectDescription: 'This is rock paper scissors game, On this game you can only play against computer and also I created this project using DOM',
    liveLink: 'https://muhammadjufri.github.io/odin-rockPaperScissors/',
    repoLink: 'https://github.com/MuhammadJufri/odin-rockPaperScissors',
    imageUrl: '/images/projects/rockPaperScissors.webp'
  },
  {
    projectName: 'Landing Page',
    projectDescription: 'This is my second project with completely responsive web design and also menu toggle feature with The Odin Project.',
    liveLink: 'https://muhammadjufri.github.io/odin-landingPage/',
    repoLink: 'https://github.com/MuhammadJufri/odin-landingPage',
    imageUrl: '/images/projects/landingPage.webp'
  },
  {
    projectName: 'Recipes',
    projectDescription: 'This is my first project with The Odin Project. This is a recipes project that will give the ingredients and how to make it.',
    liveLink: 'https://muhammadjufri.github.io/odin-recipes/',
    repoLink: 'https://github.com/MuhammadJufri/odin-recipes',
    imageUrl: '/images/projects/recipes.webp'
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<projectsData[]>
) {
  res.setHeader('Cache-Control', 's-maxage=10'); 
  res.status(200).json(projects)
}
