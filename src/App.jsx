import { useEffect, useState } from "react";
import projects from "./data/projects.json";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import ComingSoonPage from "./components/ComingSoonPage/ComingSoonPage.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import CaseStudiesSection from "./components/CaseStudies/CaseStudiesSection.jsx";
import ProjectModal from "./components/ProjectModal/ProjectModal.jsx";
import Footer from "./components/Footer/Footer.jsx";

const ROOT_DOMAIN = "erikatraverse.com";
const SUBDOMAINS = {
  individuel: "accompagnement",
  formation: "pedagogie",
};

function isProductionHost(hostname) {
  return hostname.endsWith(ROOT_DOMAIN);
}

function getInitialPage() {
  const hostname = window.location.hostname;
  if (hostname === `${SUBDOMAINS.individuel}.${ROOT_DOMAIN}`) return "individuel";
  if (hostname === `${SUBDOMAINS.formation}.${ROOT_DOMAIN}`) return "formation";
  return "landing";
}

const PAGE_META = {
  landing: {
    title: "Erika Traverse — Chef de projet pédagogique",
    description:
      "Erika Traverse, chef de projet pédagogique : accompagnement individuel et projets pédagogiques & formation.",
  },
  individuel: {
    title: "Accompagnement individuel — Erika Traverse",
    description:
      "Régulation émotionnelle, communication & relations, évolution & décisions : l'accompagnement individuel d'Erika Traverse.",
  },
  formation: {
    title: "Projets pédagogiques & formation — Erika Traverse",
    description:
      "De l'identification du besoin jusqu'au déploiement, je conçois et pilote des dispositifs de formation qui tiennent compte des enjeux humains, pédagogiques et opérationnels.",
  },
};

function App() {
  const [page, setPage] = useState(getInitialPage);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedProjectId) ?? null;

  useEffect(() => {
    const meta = PAGE_META[page];
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [page]);

  const goTo = (target) => {
    if (isProductionHost(window.location.hostname)) {
      const host = target === "landing" ? ROOT_DOMAIN : `${SUBDOMAINS[target]}.${ROOT_DOMAIN}`;
      window.location.href = `${window.location.protocol}//${host}`;
      return;
    }
    setPage(target);
  };

  const goToLanding = () => goTo("landing");

  if (page === "landing") {
    return (
      <LandingPage
        onSelectIndividuel={() => goTo("individuel")}
        onSelectFormation={() => goTo("formation")}
      />
    );
  }

  if (page === "individuel") {
    return (
      <ComingSoonPage
        title="Accompagnement individuel"
        onBack={goToLanding}
      />
    );
  }

  return (
    <>
      <Header onLogoClick={goToLanding} />
      <main>
        <Hero />
        <SkillsSection />
        <CaseStudiesSection onSelectProject={setSelectedProjectId} />
      </main>
      <Footer />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  );
}

export default App;
