import { getProjectImage } from "../../utils/projectImages.js";
import { useModal } from "../../hooks/useModal.js";
import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  useModal(Boolean(project), onClose);

  if (!project) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        <div className="modal__summary">
          <img
            className="modal__image"
            src={getProjectImage(project.image)}
            alt=""
          />
          <div>
            <span className="modal__tag">{project.tag}</span>
            <h3 className="modal__title">{project.title}</h3>
          </div>
        </div>

        <div className="modal__section">
          <h4>Contexte</h4>
          <p>{project.context}</p>
        </div>

        <div className="modal__section">
          <h4>Problématique</h4>
          <p>{project.problem}</p>
        </div>

        <div className="modal__section">
          <h4>Mon rôle</h4>
          <p>{project.role}</p>
        </div>

        <div className="modal__section">
          <h4>Démarche</h4>
          <p>{project.approach}</p>
        </div>

        <div className="modal__section">
          <h4>Ce que l'analyse a permis de décider</h4>
          <p>{project.decisions}</p>
        </div>

        <div className="modal__section">
          <h4>Capacités mises en oeuvre</h4>
          <ul>
            {project.demo.map((demo) => (
              <li key={demo}>{demo}</li>
            ))}
          </ul>
        </div>

        <div className="modal__section">
          <h4>Livrables produits</h4>
          <ul>
            {project.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </div>

        <p className="modal__certification">{project.certificationNote}</p>
      </div>
    </div>
  );
}

export default ProjectModal;
