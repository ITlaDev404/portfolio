export interface Language {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
}

const languages: Language[] = [
  {
    id: 1,
    name: "Javascript",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Javascript.png`,
    demoUrl: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    
  },
  {
    id: 2,
    name: "E-commerce React App",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Csharp_Logo.png`,
    demoUrl: "https://example.com/project2",
    
  },
  {
    id: 3,
    name: "Task Management CLI",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/PHP.svg`,
    demoUrl: undefined,
   
  },
];
export default languages ;
