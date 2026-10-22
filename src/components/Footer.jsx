import { nav, profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-bar">
        <p>
          {profile.name}
          <span aria-hidden="true"> · </span>
          {profile.location}
        </p>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
