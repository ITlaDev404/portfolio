export interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  sourceCodeUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio ",
    description: "Mon premier portfolio, un site web créé avec React + Tailwind + TypeScript",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/portfolio.png`,
    demoUrl: "https://itladev404.github.io/portfolio/",
    sourceCodeUrl: "https://github.com/ITlaDev404/portfolio",
  },
  {
    id: 2,
    name: "To-do list",
    description: "Un gestionnaire de tâches simple qui permet de créer et d'organiser ses tâches librement dans un emploi du temps personnalisable.",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/ToDo.png`,
    demoUrl: "https://github.com/ITlaDev404/Tasks_Manager/releases/tag/tag-1",
    sourceCodeUrl: "https://github.com/ITlaDev404/Tasks_Manager",
  },
  {
    id: 3,
    name: "GoatsMartialArts",
    description: "Site vitrine présentant les meilleurs de tous les temps dans chaque sport de combat",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/GoatsMartialArts.png`,
    demoUrl: "https://itladev404.github.io/GoatMartialArt/index.html",
    sourceCodeUrl: "https://github.com/ITlaDev404/GoatMartialArt",
  },
];

export default projects;
