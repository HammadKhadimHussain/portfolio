import { useState } from "react";
import { profile } from "../data/profile";
import { LinkIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section className="section band-pine reveal" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <header className="section-heading">
          <p className="kicker">06 — Contact</p>
          <h2 id="contact-title">Tell me what you need built.</h2>
          <p className="intro">
            I talk with clients directly, understand the requirement, and take
            ownership of delivering it.
          </p>
          <div className="actions">
            <a className="btn btn-light" href={`mailto:${profile.email}`}>
              <MailIcon />
              {profile.email}
            </a>
            <a
              className="btn btn-line"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon />
              LinkedIn
            </a>
          </div>
        </header>

        <dl className="contact-list">
          <div>
            <dt>
              <MailIcon /> Email
            </dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button type="button" className="copy-btn" onClick={copyEmail}>
                {copied ? "Copied" : "Copy"}
              </button>
            </dd>
          </div>
          <div>
            <dt>
              <PhoneIcon /> Phone
            </dt>
            <dd>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </dd>
          </div>
          <div>
            <dt>
              <PinIcon /> Location
            </dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>
              <LinkIcon /> LinkedIn
            </dt>
            <dd>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.linkedinLabel}
              </a>
            </dd>
          </div>
        </dl>
        <p className="sr-only" role="status">
          {copied ? "Email copied" : ""}
        </p>
      </div>
    </section>
  );
}
