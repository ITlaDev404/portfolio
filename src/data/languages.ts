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
    name: "JavaScript",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Javascript.png`,
    demoUrl: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    
  },
  {
    id: 2,
    name: "Typescript",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Typescript.png`,
    demoUrl: "https://www.typescriptlang.org/",
    
  },
  {
    id: 3,
    name: "Csharp",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Csharp_Logo.png`,
    demoUrl: "https://learn.microsoft.com/fr-fr/dotnet/csharp/",
    
  },
    {
    id: 4,
    name: "JAVA",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/JAVA.png`,
    demoUrl: "https://www.java.com/",
    
  },
  {
    id: 5,
    name: "PHP",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/PHP.png`,
    demoUrl:"https://www.php.net/",
   
  },
];
export default languages ;
