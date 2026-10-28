const About = () => {
  return (
    <section
      id="about"
      className="bg-componentColor text-portfolioText p-6 sm:p-10 md:p-12 text-center hover:shadow-lg transition-shadow w-[calc(100%-2rem)] sm:w-full max-w-prose mx-auto rounded-xl mb-12 border-borderColor border"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Présentation
      </h1>
      <p className="text-base sm:text-lg mb-2">Bonjour, c'est Ilyes Tlati 👋</p>
      <p className="text-base sm:text-lg text-center max-w-prose mx-auto leading-relaxed">
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
