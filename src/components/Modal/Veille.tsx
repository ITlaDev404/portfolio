interface NavigationProps {
  isOpenVeille: boolean;
  onCloseVeille: () => void;
}

const Veille: React.FC<NavigationProps> = ({
  isOpenVeille,
  onCloseVeille,
}) => {
  console.log("Navigation open:", isOpenVeille);

  if (!isOpenVeille) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/20 z-999 flex justify-center items-center w-screen h-screen">
      <div className="bg-componentColor w-[600px] h-[800px] p-6 rounded-xl overflow-y-auto relative">
        {/* Bouton fermeture */}
        <button
          onClick={onCloseVeille}
          className="text-protfolioText text-2xl absolute top-4 right-4 hover:font-bold hover:underline"
        >
          X
        </button>

        {/* Titre */}
        <h1 className="text-protfolioText text-3xl font-bold mb-6 text-center">
          Veille Technologique
        </h1>

        {/* Sujet */}
        <h2 className="text-portfolioText2 text-xl font-semibold mb-4">
          Bun : un nouvel écosystème JavaScript tout-en-un
        </h2>

        {/* Contexte */}
        <div className="text-protfolioText text-left space-y-4 text-base">
          <p>
            <strong>Bun</strong> est un runtime JavaScript moderne développé en
            Zig, conçu pour remplacer ou compléter Node.js et Deno. Il adopte
            une approche <strong>tout-en-un</strong> intégrant nativement un
            runtime JavaScript, un bundler, un transpiler TypeScript, un test
            runner et un gestionnaire de paquets.
          </p>

          <p>
            Grâce à ses performances élevées (temps de démarrage, exécution et
            installation des dépendances), Bun répond aux limites historiques
            de Node.js, notamment la lourdeur de l’outillage. Les benchmarks
            montrent des gains significatifs face à npm, yarn et pnpm.
          </p>

          <p>
            Son adoption progresse rapidement dans l’écosystème JavaScript,
            notamment pour les projets backend, APIs et outils de
            développement. Bun pousse ainsi l’écosystème à évoluer vers plus
            de simplicité et de performance.
          </p>

          <p>
            Pour les développeurs, Bun représente un changement de paradigme :
            moins de configuration, une productivité accrue et une forte
            compatibilité avec l’existant Node.js.
          </p>
        </div>

        {/* Outils de veille */}
        <div className="mt-6 text-left">
          <h3 className="text-portfolioText2 text-lg font-semibold mb-2">
            Outils de veille utilisés
          </h3>
          <ul className="list-disc list-inside text-protfolioText">
            <li>Perplexity</li>
            <li>YouTube</li>
            <li>Reddit</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Bun</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="mt-6 text-left">
          <h3 className="text-portfolioText2 text-lg font-semibold mb-2">
            Sources
          </h3>
          <ul className="list-disc list-inside text-protfolioText text-sm space-y-1">
            <li>Documentation officielle Bun</li>
            <li>Bun vs Node.js vs Deno – Benchmarks de performance</li>
            <li>Bun: A Complete JavaScript Toolkit</li>
            <li>Retours d’expérience développeurs (Reddit)</li>
            <li>Comparatif npm / yarn / pnpm / bun install</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Veille;
