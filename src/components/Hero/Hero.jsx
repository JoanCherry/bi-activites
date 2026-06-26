import photoProfil from "../../assets/photo-profil.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <img className="hero__photo" src={photoProfil} alt="Photo de Erika Traverse" />
        <div className="hero__text">
          <h1 className="hero__name">Erika TRAVERSE</h1>
          <p className="hero__position">
            Chef de projet pédagogique | Ingénierie de formation | Engagement
            &amp; adoption du changement
          </p>
          <blockquote className="hero__quote">
            Une formation n'a de valeur que si elle est comprise, utilisée et
            intégrée dans les pratiques du quotidien.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Hero;
