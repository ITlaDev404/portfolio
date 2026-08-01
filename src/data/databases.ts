export interface Database {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
}

const databases: Database[] = [
  {
    id: 1,
    name: "PostgreSQL",
    description: ".",
    imageUrl: `https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg`,
    demoUrl: "https://www.postgresql.org/",
    
  },
  {
    id: 2,
    name: "MariaDB",
    description: ".",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/MariaDB.png`,
    demoUrl: "https://mariadb.org/",
    
  },
  {
    id: 3,
    name: "MySQL",
    description: "",
    imageUrl: `${import.meta.env.BASE_URL}Languages_img/Mysql.png`,
    demoUrl: "https://www.mysql.com/fr/",
    
  },
  
];
export default databases ;
