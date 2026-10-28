const About = () => {
  return (
    <section
      id="about"
      className="bg-componentColor text-portfolioText p-6 sm:p-10 md:p-12 text-center hover:shadow-lg transition-shadow w-[calc(100%-2rem)] sm:w-full max-w-3xl mx-auto rounded-xl mb-12 border-borderColor border"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Présentation
      </h1>
      <p className="text-base sm:text-lg font-medium mb-4">
        Bonjour, c'est Ilyes Tlati 👋
      </p>
      <div className="text-base sm:text-lg text-center max-w-prose mx-auto leading-relaxed space-y-4">
        <p>
          Étudiant en <strong>Licence 3 Informatique générale au CNAM Paris</strong> 🎓
          (titulaire d'un <strong>BTS SIO SLAM</strong> et d'un <strong>Bac Pro Systèmes Numériques – Réseaux</strong>)
          et préparant mon intégration en cycle d'ingénieur, je recherche une{" "}
          <strong>alternance de 12 à 24 mois</strong> en Île-de-France{" "}
          <em>(rythme : 3 jours entreprise / 2 jours école)</em>.
        </p>
        <p>
          Fort d'un profil hybride alliant <strong>Développement Web Full Stack</strong> 💻
          (TypeScript/JavaScript, React, Angular, Bun/Node.js, Java, C#, PHP, SQL) et{" "}
          <strong>Administration Systèmes, Réseaux &amp; DevOps</strong> 🐧🖥️
          (Linux, Windows Server, Docker, CI/CD, pfSense, Zabbix, Wazuh, maintenance matérielle),
          je suis opérationnel aussi bien pour concevoir des applications web performantes que pour
          maintenir, automatiser et sécuriser des infrastructures.
        </p>
        <p>
          Vous retrouverez mon CV ci-dessus ainsi que mes différents projets ci-dessous 🧑‍💻
        </p>
      </div>
    </section>
  );
};

export default About;
