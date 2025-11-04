export type BackendTech = "Java" | "Python";

export interface SampleProject {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
}

export interface BackendBlueprint {
  tech: BackendTech;
  pitch: string;
  codeSnippet: string;
  architecture: string[];
  strengths: string[];
  projects: SampleProject[];
}

export const backendBlueprints: BackendBlueprint[] = [
  {
    tech: "Java",
    pitch:
      "Devine AI leverages the Java ecosystem for enterprise-grade resilience, weaving Spring Boot, Kafka, and container-native tooling into dependable platforms.",
    codeSnippet: `@RestController
@RequestMapping("/api/chat")
public class ChatController {
  private final ConversationService service;

  public ChatController(ConversationService service) {
    this.service = service;
  }

  @PostMapping
  public Mono<ResponseEntity<ChatReply>> converse(@Valid @RequestBody ChatPrompt prompt) {
    return service
      .route(prompt)
      .map(reply -> ResponseEntity.ok(new ChatReply(reply.message(), reply.tokensUsed())));
  }
}`,
    architecture: [
      "Spring Boot reactive services orchestrating AI workflows",
      "Kafka pipelines buffering telemetry and inference events",
      "PostgreSQL with vector extensions for hybrid retrieval",
      "Kubernetes-native deployment with progressive rollouts"
    ],
    strengths: [
      "Battle-tested reliability for regulated industries",
      "Robust module boundaries with domain-driven patterns",
      "Comprehensive observability baked into each service"
    ],
    projects: [
      {
        id: "java-risk-analytics",
        title: "GenAI Risk Analytics Platform",
        summary:
          "Risk signals streaming from dozens of sources converge into a low-latency inference fabric with explainable AI context panels.",
        highlights: [
          "Latency under 120ms across 5 availability zones",
          "Self-healing pipelines with chaos-driven testing",
          "Explainability layer using SHAP visual summaries"
        ]
      },
      {
        id: "java-support-copilot",
        title: "Customer Support Copilot",
        summary:
          "An omni-channel assistant augmenting human agents with curated actions, knowledge search, and compliance gating.",
        highlights: [
          "Federated search over 20M knowledge artifacts",
          "Dynamic policy engine enforcing regional compliance",
          "Live service maps for proactive incident response"
        ]
      }
    ]
  },
  {
    tech: "Python",
    pitch:
      "Python unlocks rapid experimentation with Devine AI, blending FastAPI, Celery, and the scientific stack for adaptive intelligence in production.",
    codeSnippet: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class OrchestrationRequest(BaseModel):
    objective: str
    memory_window: int = 6

@app.post("/api/agent/playbook")
def generate_playbook(request: OrchestrationRequest):
    plans = agentic_planner.plan(objective=request.objective,
                                 memory_window=request.memory_window)
    return {"steps": plans, "metrics": orchestrator.benchmark(plans)}`,
    architecture: [
      "FastAPI edge orchestrators with async I/O",
      "Celery task graph executing model ensembles",
      "Redis Streams for conversation-state fan-out",
      "Argo Workflows automating fine-tuning pipelines"
    ],
    strengths: [
      "Lightning-fast prototyping aligned with production rigor",
      "Seamless integration with ML toolchain and notebooks",
      "Adaptive guardrails powered by policy-driven middleware"
    ],
    projects: [
      {
        id: "python-agent-lab",
        title: "Agent Lab Experimentation Suite",
        summary:
          "Full-stack experimentation lab for LLM agents with scenario simulators, evaluation harnesses, and telemetry dashboards.",
        highlights: [
          "Scenario DSL supporting 50+ synthetic personas",
          "Automated eval harness with regression detection",
          "Policy-aware sandboxing for safe rollout gates"
        ]
      },
      {
        id: "python-supplychain-copilot",
        title: "Supply Chain Live Copilot",
        summary:
          "Real-time optimization engine guiding planners across logistics, inventory, and sustainability objectives.",
        highlights: [
          "Constraint solving with OR-Tools and LLM rationale",
          "Predictive insights fused with IoT telemetry",
          "Narrative reporting streamed into operations tools"
        ]
      }
    ]
  }
];
