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
    name: "git",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/git.png`,
    demoUrl: "https://mariadb.org/",
    
  },
  {
    id: 3,
    name: "github",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/github.svg`,
    demoUrl: "https://www.mysql.com/fr/",
    
  },
   {
    id: 4,
    name: "AWS",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/AWS.svg`,
    demoUrl: "https://www.mysql.com/fr/",
    
  },
  
];
export default touls ;
