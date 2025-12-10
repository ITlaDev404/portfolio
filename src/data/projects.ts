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
    name: "Portfolio V1",
    description: "My first personal portfolio website built with HTML, CSS, and JavaScript.",
    imageUrl: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Project+1",
    demoUrl: "https://example.com/project1",
    sourceCodeUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    name: "E-commerce React App",
    description: "A full-stack e-commerce application developed with React, Node.js, and MongoDB.",
    imageUrl: "https://via.placeholder.com/300x200/00FF00/000000?text=Project+2",
    demoUrl: "https://example.com/project2",
    sourceCodeUrl: "https://github.com/yourusername/project2",
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
