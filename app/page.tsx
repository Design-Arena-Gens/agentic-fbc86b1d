import CapabilityGrid from "../components/CapabilityGrid";
import BackendShowcase from "../components/BackendShowcase";
import Hero from "../components/Hero";
import WorkflowTimeline from "../components/WorkflowTimeline";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CapabilityGrid />
      <BackendShowcase />
      <WorkflowTimeline />
      <section className="cta">
        <h2>Ready to ship your next release with Devine AI?</h2>
        <p>
          From discovery workshops to production monitoring, Devine AI delivers a full-stack acceleration layer for
          engineering teams that want AI-native systems grounded in reality.
        </p>
        <a className="primary" href="mailto:build@devine.ai">
          Start the engagement
        </a>
      </section>
    </main>
  );
}
