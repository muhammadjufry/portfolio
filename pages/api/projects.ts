import type { NextApiRequest, NextApiResponse } from 'next'
import { projectsData } from '../../types';

const projects: projectsData[] = [
  {
    projectName: 'Tic Tac Toe',
    projectDescription: 'This my Tic Tac Toe game, on this game you can play with your friends or against computer.',
    liveLink: 'https://tic-tac-toe-game2.vercel.app/',
    repoLink: 'https://github.com/SayyidMuhammad878/ticTacToe',
    imageUrl: '/images/projects/ticTacToe.webp'
  },
  {
    projectName: 'Etch A Sketch',
    projectDescription: 'This is my paint draw project. There is a feature that you can draw using rgb color mode.',
    liveLink: 'https://sayyidmuhammad878.github.io/odin-etch-a-sketch/',
    repoLink: 'https://github.com/SayyidMuhammad878/odin-etch-a-sketch',
    imageUrl: '/images/projects/etchASketch.webp'
  },
  {
    projectName: 'Rock Paper Scissor',
    projectDescription: 'On this game you can only play against computer. I created this project using JavaScript DOM',
    liveLink: 'https://sayyidmuhammad878.github.io/odin-rockPaperScissors/',
    repoLink: 'https://github.com/SayyidMuhammad878/odin-rockPaperScissors',
    imageUrl: '/images/projects/rockPaperScissors.webp'
  },
  {
    projectName: 'Landing Page',
    projectDescription: 'This is a simple landing page project but completely responsive web design.',
    liveLink: 'https://sayyidmuhammad878.github.io/odin-landingPage/',
    repoLink: 'https://github.com/SayyidMuhammad878/odin-landingPage',
    imageUrl: '/images/projects/landingPage.webp'
  },
  {
    projectName: 'Recipes',
    projectDescription: 'This project will give you the ingredients of recipes and how to make it.',
    liveLink: 'https://sayyidmuhammad878.github.io/odin-recipes/',
    repoLink: 'https://github.com/SayyidMuhammad878/odin-recipes',
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
