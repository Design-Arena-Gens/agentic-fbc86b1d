const steps = [
  {
    title: "Discover",
    detail:
      "Map business objectives to AI-enabled capabilities, capturing domain constraints, compliance requirements, and available data sources."
  },
  {
    title: "Design",
    detail:
      "Draft service contracts, resilience budgets, and evaluation playbooks while selecting the optimal runtime between Java and Python."
  },
  {
    title: "Deliver",
    detail:
      "Generate scaffolding, implement orchestrations, and wire automated testing with synthetic datasets and red-team prompts."
  },
  {
    title: "Enhance",
    detail:
      "Deploy iterative models, collect product analytics, and feed insights into continuous fine-tuning and agent retraining cycles."
  }
];

export default function WorkflowTimeline() {
  return (
    <section className="workflow" id="workflow">
      <h2>The agentic workflow powering every release.</h2>
      <ol>
        {steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
