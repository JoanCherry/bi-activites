import projects from "../../data/projects.json";
import { getProjectImage } from "../../utils/projectImages.js";
import CaseStudyCard from "./CaseStudyCard.jsx";
import "./CaseStudies.css";

function CaseStudiesSection({ onSelectProject }) {
  return (
    <section id="etudes-de-cas">
      <div className="container">
        <h2 className="section-title">Études de cas</h2>
        <div className="case-studies-grid">
          {projects.map((project) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              image={getProjectImage(project.image)}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
