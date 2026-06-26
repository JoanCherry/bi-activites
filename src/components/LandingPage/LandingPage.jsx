import "./LandingPage.css";

function LandingPage({ onSelectIndividuel, onSelectFormation }) {
  return (
    <section className="landing">
      <div className="container landing__inner">
        <h1 className="landing__title">Comprendre, apprendre, évoluer.</h1>
        <p className="landing__subtitle">
          Deux activités, une même conviction : les transformations durables passent par la compréhension, l'apprentissage et l'appropriation.
        </p>
        <div className="landing__choices">
          <button className="landing__choice" onClick={onSelectIndividuel}>
            Accompagnement individuel
          </button>
          <button className="landing__choice" onClick={onSelectFormation}>
            Projets pédagogiques &amp; formation
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
