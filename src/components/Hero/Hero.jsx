import photoProfil from "../../assets/photo-profil.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__intro">
          <img className="hero__photo" src={photoProfil} alt="Photo de Erika Traverse" />
          <div className="hero__identity">
            <h1 className="hero__name">Erika TRAVERSE</h1>
            <p className="hero__position">
              Chef de projet pédagogique | Ingénierie de formation | Expérience apprenant
              &amp; adoption des pratiques
            </p>
          </div>
        </div>
        <p className="hero__pitch">
          De l'identification du besoin jusqu'au déploiement, je conçois et
          pilote des dispositifs de formation qui tiennent compte des
          enjeux humains, pédagogiques et opérationnels.
        </p>
        <blockquote className="hero__quote">
          Une formation n'a de valeur que lorsqu'elle aide réellement les personnes à comprendre, expérimenter et faire évoluer leurs pratiques.
        </blockquote>
      </div>
    </section>
  );
}

export default Hero;
