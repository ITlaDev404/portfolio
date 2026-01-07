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
    description: "mon premier portfolio site wibe créer avec React + Tailwind + TypeScript",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/portfolio.png`,
    demoUrl: "https://itladev404.github.io/portfolio/",
    sourceCodeUrl: "https://github.com/ITlaDev404/portfolio",
  },
  {
    id: 2,
    name: "To-do list",
    description: "Un gestionnaire de tâches simple qui permet de créer et organiser ses tâches librement dans un emploi du temps personnalisable. .",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/ToDo.png`,
    demoUrl: "https://github.com/ITlaDev404/Tasks_Manager/releases/tag/tag-1",
    sourceCodeUrl: "https://github.com/ITlaDev404/Tasks_Manager",
  },
  {
    id: 3,
    name: "Task Management CLI",
    description: "A command-line interface tool for managing daily tasks and to-do lists.",
    imageUrl: "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Project+3",
    demoUrl: undefined,
    sourceCodeUrl: "https://github.com/yourusername/project3",
  },
];

export default projects;
