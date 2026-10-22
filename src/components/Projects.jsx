import { useMemo, useState } from "react";
import { filters, projects } from "../data/profile";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.groups.includes(filter)),
    [filter],
  );

  return (
    <section className="section reveal" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <header className="section-heading">
          <p className="kicker">04 — Selected work</p>
          <h2 id="work-title">Products, portals, and platforms.</h2>
          <p className="intro">
            Systems from client and product work: CRMs, ERPs, booking and
            procurement tools, and the APIs behind them.
          </p>
        </header>

        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((item) => {
            const count =
              item === "All"
                ? projects.length
                : projects.filter((project) => project.groups.includes(item))
                    .length;
            return (
              <button
                key={item}
                type="button"
                className="filter"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
                <span>{count}</span>
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} projects
        </p>

        <div className="project-grid" key={filter}>
          {visible.map((project, index) => (
            <article key={project.id} className="project">
              <header className="card-head">
                <span className="card-index">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </span>
                <span className="card-tag">{project.groups[0]}</span>
              </header>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul className="chips">
                {project.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="sr-only">Item {index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
