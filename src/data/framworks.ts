export interface Framwork {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
}

const framworks: Framwork[] = [
  {
    id: 1,
    name: "React",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/react.svg`,
    demoUrl: "https://fr.react.dev/",
    
  },
  {
    id: 2,
    name: "Angular",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Angular.gif`,
    demoUrl: "https://angular.dev/",
    
  },
  {
    id: 3,
    name: "Bun",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Bun.svg`,
    demoUrl: "https://bun.com/",
    
  },
  {
    id: 4,
    name: "Tailwind",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Tailwind.svg`,
    demoUrl:"https://tailwindcss.com/",
   
  },
];
export default framworks ;
