import "./ComingSoonPage.css";

function ComingSoonPage({ title, onBack }) {
  return (
    <div className="coming-soon-page">
      <header className="header">
        <div className="container header__inner">
          <button className="header__logo" onClick={onBack}>
            ← Accueil
          </button>
        </div>
      </header>
      <section className="coming-soon">
        <div className="container coming-soon__inner">
          <h1 className="coming-soon__title">{title}</h1>
          <p className="coming-soon__text">
            Cette page est en cours de rédaction. Revenez bientôt pour
            découvrir cet accompagnement plus en détail.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ComingSoonPage;
