export interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  sourceCodeUrl?: string;
  demo: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: "PigeonFamily ",
    description:
      "Application web de gestion de pigeonniers avec suivi généalogique des pigeons.",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/PigeonFamily.png`,
    demoUrl: "https://itladev404.github.io/portfolio/",
    sourceCodeUrl: "https://github.com/ITlaDev404/portfolio",
    demo: false,
  },
  {
    id: 2,
    name: "To-do list",
    description:
      "Un gestionnaire de tâches simple qui permet de créer et d'organiser ses tâches librement dans un emploi du temps personnalisable.",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/ToDo.png`,
    demoUrl: "https://github.com/ITlaDev404/Tasks_Manager/releases/tag/tag-1",
    sourceCodeUrl: "https://github.com/ITlaDev404/Tasks_Manager",
    demo: true,
  },
  {
    id: 3,
    name: "SparFinder",
    description:
      "SparFinder est une application web complète permettant aux utilisateurs de trouver des partenaires d'entraînement (sparring partners) dans les sports de combat.",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/GoatsMartialArts.png`,
    demoUrl: "https://itladev404.github.io/GoatMartialArt/index.html",
    sourceCodeUrl: "https://github.com/ITlaDev404/SparFinder/tree/main",
    demo: false,
  },
 
];

export default projects;
