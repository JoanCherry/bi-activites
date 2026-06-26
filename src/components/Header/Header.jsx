import "./Header.css";

function Header({ onLogoClick }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <button className="header__logo" onClick={onLogoClick}>
          ← Accueil
        </button>
        <nav className="header__nav">
          <a href="#etudes-de-cas">Études de cas</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
