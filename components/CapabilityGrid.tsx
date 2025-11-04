const capabilities = [
  {
    title: "Model-chained workflows",
    description:
      "Blueprints unify structured automation with conversational agents, orchestrating deterministic steps alongside LLM creativity."
  },
  {
    title: "Guardrailed delivery",
    description:
      "Policy engines, synthetic monitoring, and chaos testing keep AI behavior auditable and production-safe."
  },
  {
    title: "Observability first",
    description:
      "Tracing spans, domain metrics, and feedback loops capture how every prompt evolves into an insight or action."
  },
  {
    title: "Accelerated sprints",
    description:
      "Agentic scaffolds spin up CI/CD, IaC, and documentation so teams can focus on differentiation instead of boilerplate."
  }
];

export default function CapabilityGrid() {
  return (
    <section className="capabilities" id="capabilities">
      <h2>From idea to production, Devine AI codes with conviction.</h2>
      <div className="grid">
        {capabilities.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
