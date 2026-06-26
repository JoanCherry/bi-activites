import SkillCard from "./SkillCard.jsx";
import "./SkillsSection.css";

const skills = [
  {
    title: "Analyse des besoins",
    description:
      "Identifier les besoins réels, les freins et les contraintes afin d'orienter des choix pédagogiques pertinents.",
  },
  {
    title: "Conception de parcours pédagogiques",
    description:
      "Transformer des besoins métier en dispositifs pédagogiques pensés pour être compris, utilisés et mis en pratique.",
  },
  {
    title: "Adoption des pratiques & expérience apprenant",
    description:
      "Créer des dispositifs dans lesquels les personnes se sentent concernées, peuvent expérimenter, interagir et mettre en pratique de nouvelles façons de faire.",
  },
];

function SkillsSection() {
  return (
    <section id="ce-que-je-fais">
      <div className="container">
        <h2 className="section-title">Domaines d'intervention</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
        <div className="section_note">J'accorde une place centrale aux conditions qui favorisent l'apprentissage : se sentir inclus, concerné et en confiance, interagir, expérimenter, et transformer les apprentissages en pratiques.</div>
      </div>
    </section>
  );
}

export default SkillsSection;
