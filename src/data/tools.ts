export interface Touls {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
}

const touls: Touls[] = [
  {
    id: 1,
    name: "Linux",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Linux.png`,
    demoUrl: "https://en.wikipedia.org/wiki/Linux",
    
  },
  {
    id: 2,
    name: "Git",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/git.png`,
    demoUrl: "https://git-scm.com/",
    
  },
  {
    id: 3,
    name: "GitHub",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/github.svg`,
    demoUrl: "https://github.com/",
    
  },
   {
    id: 4,
    name: "AWS",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/AWS.svg`,
    demoUrl: "https://aws.amazon.com/fr/",
    
  },
  
];
export default touls ;
