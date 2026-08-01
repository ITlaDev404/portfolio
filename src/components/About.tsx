const About = () => {
  return (
    <section
      id="about"
      className="  bg-componentColor  text-portfolioText p-12 p-max-12 text-center hover:shadow-lg max-w-prose mx-auto rounded-xl mb-12 border-borderColor border hover:border-1"
    >
      <h1 className="text-4xl font-bold mb-4">Présentation</h1>
      <p className="text-lg">Bonjour, c'est Ilyes Tlati 👋</p>
      <p className=" #about text-lg text-center  max-w-prose  mx-auto">
        Étudiant en BTS SIO option SLAM 🎓, admis en Licence Informatique L3 au
        CNAM Paris pour la rentrée 2026, je recherche une alternance en
        développement logiciel, web ou systèmes 💻. Expérience en développement
        d'applications web, bases de données, environnements Linux 🐧 ainsi
        qu'en maintenance et administration de réseaux (VLAN, DHCP, DNS) 🖥️.
        Motivé par la conception de solutions techniques et le travail en
        équipe 🤝. Vous retrouverez mon CV ci-dessus et mes différents projets
        ci-dessous 🧑‍💻
      </p>
    </section>
  );
};

export default About;
