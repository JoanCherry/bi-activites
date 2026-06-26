function SkillCard({ title, description }) {
  return (
    <article className="skill-card">
      <h3 className="skill-card__title">{title}</h3>
      <p className="skill-card__text">{description}</p>
    </article>
  );
}

export default SkillCard;
