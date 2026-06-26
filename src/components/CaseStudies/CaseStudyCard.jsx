function CaseStudyCard({ project, image, onSelect }) {
  return (
    <article
      className="case-study-card"
      onClick={() => onSelect(project.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onSelect(project.id);
      }}
    >
      <img className="case-study-card__image" src={image} alt="" />
      <div className="case-study-card__body">
        <span className="case-study-card__tag">{project.tag}</span>
        <h3 className="case-study-card__title">{project.title}</h3>
      </div>
    </article>
  );
}

export default CaseStudyCard;
