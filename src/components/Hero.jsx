import { impact, profile } from "../data/profile";
import HeroField from "./HeroField";
import { LinkIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero reveal" id="top" aria-labelledby="hero-title">
      <HeroField />
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">{profile.headline}</p>
          <h1 id="hero-title">Hammad Khadim Hussain</h1>
          <p className="role-line">{profile.role}</p>
          <p className="lede">
            I build web applications, CRM and ERP systems, and REST APIs with
            Laravel, Node.js, React, Vue, and .NET — then take them through
            architecture, AI features, and AWS deployment.
          </p>
          <div className="actions">
            <a className="btn" href={`mailto:${profile.email}`}>
              <MailIcon />
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon />
              LinkedIn
            </a>
          </div>
          <p className="hero-meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true">·</span>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
          </p>
        </div>

        <aside className="now-card" aria-label="Current role">
          <p className="now-kicker">Current role</p>
          <p className="now-role">Full Stack Developer</p>
          <p className="now-company">Pixelz360</p>
          <p className="now-dates">Aug 2023 – Present</p>
          <ul className="now-list">
            <li>CRM and ERP systems</li>
            <li>AI chatbots, RAG, and OpenAI features</li>
            <li>AWS, Docker, NGINX, and CI/CD</li>
          </ul>
          <a className="text-link" href="#experience">
            Read the full role
          </a>
        </aside>
      </div>

      <div className="wrap">
        <dl className="stats">
          {impact.map((item) => (
            <div key={item.value + item.label}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
