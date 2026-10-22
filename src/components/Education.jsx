import { education } from "../data/profile";

export default function Education() {
  return (
    <section
      className="section band-white reveal"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="wrap education-layout">
        <header className="section-heading">
          <p className="kicker">05 — Education</p>
          <h2 id="education-title">Education & certification.</h2>
        </header>
        <div className="edu-list">
          {education.map((item) => (
            <article key={item.id} className="edu-row">
              <p className="job-dates">{item.period}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="company">{item.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
