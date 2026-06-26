import { useState } from "react";
import projects from "./data/projects.json";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import ComingSoonPage from "./components/ComingSoonPage/ComingSoonPage.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import CaseStudiesSection from "./components/CaseStudies/CaseStudiesSection.jsx";
import ProjectModal from "./components/ProjectModal/ProjectModal.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [page, setPage] = useState("landing");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedProjectId) ?? null;

  const goToLanding = () => setPage("landing");

  if (page === "landing") {
    return (
      <LandingPage
        onSelectIndividuel={() => setPage("individuel")}
        onSelectFormation={() => setPage("formation")}
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
