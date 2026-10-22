import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section
      className="section band-white reveal"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="wrap">
        <header className="section-heading">
          <p className="kicker">02 — Experience</p>
          <h2 id="experience-title">Where the work happened.</h2>
          <p className="intro">
            Three roles, from Laravel and payments to ERP platforms, RAG
            chatbots, and AWS delivery.
          </p>
        </header>

        <div className="jobs">
          {experience.map((job) => (
            <article key={job.id} className="job">
              <div className="job-meta">
                <p className="job-dates">{job.dates}</p>
                {job.current ? <span className="pill">Current</span> : null}
              </div>
              <div className="job-body">
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <ul className="points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label={`Tools at ${job.company}`}>
                  {job.stack.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
