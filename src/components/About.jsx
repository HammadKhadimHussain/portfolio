import { about, ways } from "../data/profile";

export default function About() {
  return (
    <section className="section reveal" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <header className="section-heading">
          <p className="kicker">01 — About</p>
          <h2 id="about-title">
            From the client conversation to the server the product runs on.
          </h2>
        </header>
        <div className="about-copy">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="ways">
          {ways.map((way) => (
            <article key={way.title} className="way">
              <h3>{way.title}</h3>
              <p>{way.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
