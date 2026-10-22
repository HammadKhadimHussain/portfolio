import { useEffect, useState } from "react";
import { nav, profile } from "../data/profile";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 140;
      let current = "";
      nav.forEach((item) => {
        const element = document.getElementById(item.id);
        if (!element) return;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = item.id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? "site-header is-stuck" : "site-header"}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="wrap header-bar">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            HK
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-small header-email" href={`mailto:${profile.email}`}>
          Email
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={open ? "mobile-nav is-open" : "mobile-nav"}
        aria-label="Mobile"
        hidden={!open}
      >
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={close}>
            {item.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} onClick={close}>
          {profile.email}
        </a>
      </nav>
    </header>
  );
}
