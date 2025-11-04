"use client";

import { useState } from "react";
import { backendBlueprints, type BackendTech } from "../data/backendShowcases";

interface TechTabProps {
  tech: BackendTech;
  isActive: boolean;
  onSelect: (tech: BackendTech) => void;
}

function TechTab({ tech, isActive, onSelect }: TechTabProps) {
  return (
    <button
      className={`tech-tab ${isActive ? "active" : ""}`}
      onClick={() => onSelect(tech)}
      type="button"
    >
      {tech}
    </button>
  );
}

export default function BackendShowcase() {
  const [activeTech, setActiveTech] = useState<BackendTech>("Java");
  const selected = backendBlueprints.find((item) => item.tech === activeTech)!;

  return (
    <section className="backend" id="backend-showcase">
      <header className="backend-header">
        <h2>Choose the runtime, Devine AI delivers the backbone.</h2>
        <p>
          Toggle between Java and Python architectures to see how the agentic build process adapts to your stack while
          preserving clarity, guardrails, and measurable outcomes.
        </p>
      </header>
      <div className="tech-tabs">
        {backendBlueprints.map((item) => (
          <TechTab key={item.tech} tech={item.tech} isActive={item.tech === activeTech} onSelect={setActiveTech} />
        ))}
      </div>
      <div className="blueprint">
        <div className="pitch">
          <h3>{selected.tech} Playbook</h3>
          <p>{selected.pitch}</p>
          <ul className="strengths">
            {selected.strengths.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="code">
          <div className="code-label">Representative entrypoint</div>
          <pre>
            <code>{selected.codeSnippet}</code>
          </pre>
        </div>
      </div>
      <div className="architecture">
        <h4>Architecture snapshot</h4>
        <ul>
          {selected.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="projects">
        {selected.projects.map((project) => (
          <article key={project.id} className="project-card">
            <h5>{project.title}</h5>
            <p>{project.summary}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
