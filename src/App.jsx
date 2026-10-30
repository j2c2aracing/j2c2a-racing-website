
import React from 'react';

const App = () => {
  return (
    <div className="site-wrapper">
      <header className="navbar">
        <a href="#" className="logo">
          J2C2A<span>RACING</span>
        </a>

        <nav>
          <a href="#ligue">LIGUE</a>
          <a href="#esport">E-SPORT</a>
          <a href="#about">À PROPOS</a>
        </nav>

        <a href="#ligue" className="header-button">
          REJOINDRE LA J2
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              THE RACING COMMUNITY
            </span>

            <h1>
              RACE<br />
              BEYOND<br />
              <span>LIMITS.</span>
            </h1>

            <p>
              Une communauté. Une passion.
              Une compétition.
              Bienvenue dans l'univers J2C2A Racing.
            </p>

            <div className="hero-actions">
              <a href="#ligue" className="button-primary">
                DÉCOUVRIR LA LIGUE
              </a>
              <a href="#esport" className="button-secondary">
                ESPACE E-SPORT
              </a>
            </div>
          </div>

          <div className="hero-number">
            <span>J2</span>
            <strong>RACING</strong>
          </div>

          <div className="hero-bottom">
            <span>SIMRACING COMMUNITY</span>
            <span>EST. J2C2A</span>
            <span>01 / 02</span>
          </div>
        </section>

        <section className="universes" id="about">
          <div className="section-heading">
            <span>DISCOVER OUR WORLD</span>
            <h2>DEUX UNIVERS.<br />UNE PASSION.</h2>
          </div>

          <div className="universe-grid">
            <article className="universe-card league" id="ligue">
              <span className="card-index">01 / LIGUE</span>
              <div>
                <h3>J2C2A<br />RACING</h3>
                <p>
                  Championnats, divisions, pilotes,
                  écuries et compétitions.
                </p>
                <a href="#ligue">DÉCOUVRIR LA LIGUE ↗</a>
              </div>
            </article>

            <article className="universe-card esports" id="esport">
              <span className="card-index">02 / E-SPORT</span>
              <div>
                <h3>J2C2A<br />E-SPORT</h3>
                <p>
                  Compétition, équipes, recrutement
                  et performances.
                </p>
                <a href="#esport">DÉCOUVRIR L'E-SPORT ↗</a>
              </div>
            </article>
          </div>
        </section>

        <section className="manifesto">
          <span>J2C2A RACING SPIRIT</span>
          <h2>MORE THAN A GAME.<br /><em>A RACING COMMUNITY.</em></h2>
        </section>
      </main>

      <footer className="footer">
        <a href="#" className="logo">
          J2C2A<span>RACING</span>
        </a>
        <p>© 2026 J2C2A Racing. Tous droits réservés.</p>
        <span>BUILT FOR RACING.</span>
      </footer>
    </div>
  );
};

export default App;
