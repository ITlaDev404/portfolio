export interface Skills {
  id: number;
  name: string;
  description: string;
  imageUrl: string;

  
  sourceCodeUrl?: string;
}

const skills: string | number  = [
  {
    id: 1,
    name: "Javascript",
    description: "My first personal portfolio website built with HTML, CSS, and JavaScript.",
    imageUrl: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Project+1",
    
    sourceCodeUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    name: "E-commerce React App",
    description: "A full-stack e-commerce application developed with React, Node.js, and MongoDB.",
    imageUrl: "https://via.placeholder.com/300x200/00FF00/000000?text=Project+2",
    
    sourceCodeUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    name: "Task Management CLI",
    description: "A command-line interface tool for managing daily tasks and to-do lists.",
    imageUrl: "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Project+3",
    
    sourceCodeUrl: "https://github.com/yourusername/project3",
  },
];

export default skills;
