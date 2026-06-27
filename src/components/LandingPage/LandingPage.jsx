import { Fragment } from "react";
import "./LandingPage.css";

const journeySteps = [
  {
    title: "Comprendre",
    description:
      "les besoins, les points de blocage et les leviers de transformation",
  },
  {
    title: "Apprendre",
    description:
      "expérimenter, échanger et développer de nouvelles compétences",
  },
  {
    title: "Évoluer",
    description: "faire évoluer durablement les pratiques et les comportements",
  },
];

function LandingPage({ onSelectIndividuel, onSelectFormation }) {
  return (
    <section className="landing">
      <div className="container landing__inner">
        <h1 className="visually-hidden">Comprendre, apprendre, évoluer</h1>
        <div className="landing__journey">
          {journeySteps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="landing__step">
                <h2 className="landing__step-title">{step.title}</h2>
                <p className="landing__step-text">{step.description}</p>
              </div>
              {index < journeySteps.length - 1 && (
                <span className="landing__arrow" aria-hidden="true">
                  →
                </span>
              )}
            </Fragment>
          ))}
        </div>

        <div className="landing__fork" aria-hidden="true">
          <span>↓</span>
          <span>↓</span>
        </div>

        <div className="landing__choices">
          <article
            className="landing__choice"
            onClick={onSelectIndividuel}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") onSelectIndividuel();
            }}
          >
            <span className="landing__choice-icon" aria-hidden="true"></span>
            <h2 className="landing__choice-title">Accompagnement individuel</h2>
            <ul className="landing__choice-list">
              <li>Régulation émotionnelle</li>
              <li>Communication &amp; relations</li>
              <li>Évolution &amp; décisions</li>
            </ul>
          </article>

          <article
            className="landing__choice"
            onClick={onSelectFormation}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") onSelectFormation();
            }}
          >
            <span className="landing__choice-icon" aria-hidden="true"></span>
            <h2 className="landing__choice-title">Pédagogie &amp; formation</h2>
            <ul className="landing__choice-list">
              <li>Analyse des besoins</li>
              <li>Conception</li>
              <li>Pilotage</li>
              <li>Adoption des pratiques</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
