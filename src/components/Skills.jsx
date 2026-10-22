import { skillGroups } from "../data/profile";

export default function Skills() {
  return (
    <section className="section band-sand reveal" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <header className="section-heading">
          <p className="kicker">03 — Skills</p>
          <h2 id="skills-title">The stack I use in production.</h2>
          <p className="intro">
            Backend, front-end, data, Linux, AI, and the CMS work that ships
            with the products.
          </p>
        </header>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="skill-group">
              <header className="card-head">
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
              </header>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
