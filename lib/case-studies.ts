export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  kicker: string;
  overview: string;
  challenge: string[];
  whatIDid: string[];
  impact: string[];
  insight: string;
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "national-ticketless-promotion",
    title:
      "Scaling a National Digital Promotion with First-Time Ticketless Architecture",
    summary:
      "Led the U.S. transition from physical to fully digital participation for a global QSR brand. Repeatable execution model adopted for future programs.",
    kicker: "QSR · National launch",
    overview:
      "Led digital execution for a high-visibility national promotional campaign for a global quick-service restaurant brand, introducing a first-time ticketless participation system across the U.S.",
    challenge: [
      "Transition from physical to fully digital participation mechanics",
      "Expected engagement at millions of users nationwide",
      "Real-time system reliability under peak load",
      "Coordination across 10+ cross-functional stakeholders",
      "Tight timelines with high executive visibility",
    ],
    whatIDid: [
      "Established a standardized delivery framework across product, engineering, QA, and operations",
      "Led partner and client testing teams through a multi-phased testing approach",
      "Built clear cross-functional communication and escalation pathways",
      "Partnered with engineering to proactively identify and mitigate system risks",
    ],
    impact: [
      "Successfully supported a national-scale launch with millions of user interactions",
      "Maintained high system uptime during peak engagement windows",
      "Reduced delivery ambiguity across teams through structured workflows",
      "Created a repeatable execution model adopted for future programs",
    ],
    insight:
      "Execution at scale is driven not by individual components, but by how effectively the system is coordinated end-to-end.",
    image: "/casestudy-1.webp",
  },
  {
    slug: "realtime-digital-payouts",
    title:
      "Transforming Prize Fulfillment from Manual Checks to Real-Time Digital Payouts",
    summary:
      "Replaced legacy check-based fulfillment with secure API-based payouts at national scale. Clean launch despite first-time implementation.",
    kicker: "Fintech integration · National scale",
    overview:
      "Led the transition of a national promotional campaign from manual, check-based prize fulfillment to a real-time digital payout system, integrating directly with financial partners through secure APIs.",
    challenge: [
      "Shift from legacy fulfillment (physical checks) to real-time digital prize distribution",
      "Because a partner sandbox was not available, the team had to design a controlled, low-risk approach to validate the integration in a production-like environment",
      "High security, validation, and compliance requirements",
      "New capability for all parties involved, increasing uncertainty and complexity",
    ],
    whatIDid: [
      "Led the agency team through end-to-end implementation, navigating technical and operational risks",
      "Drove alignment across client, engineering, and financial partners to identify and address system vulnerabilities early",
      "Established security guardrails and validation controls before enabling integration",
      "Implemented real-time monitoring and fail-safe mechanisms to detect and respond to issues quickly",
      "Facilitated continuous risk assessment and mitigation throughout development and launch",
    ],
    impact: [
      "Successfully launched a real-time digital payout system at national scale",
      "Replaced manual fulfillment with a faster, more seamless user experience",
      "Achieved a clean launch with minimal issues despite first-time implementation",
      "Built confidence across stakeholders in a new, scalable fulfillment model",
    ],
    insight:
      "Scaling new capabilities requires not just technical execution, but disciplined risk management, visibility, and control.",
    image: "/casestudy-2.webp",
  },
  {
    slug: "live-promotion-extreme-demand",
    title: "Scaling a Live Promotion Under Extreme Demand and Fraud Pressure",
    summary:
      "Multi-fold over-forecast engagement absorbed in real time. Avoided code depletion and legal risk through live ingestion and active fraud mitigation.",
    kicker: "Live operations · Real-time scaling",
    overview:
      "Led execution for a national promotional campaign experiencing significantly higher-than-expected engagement, requiring real-time scaling of code inventory and fraud mitigation while the program was live.",
    challenge: [
      "Original forecasts were exceeded by multiple times during live operations",
      "Risk of code depletion with potential legal and customer experience implications",
      "Need to scale code generation and ingestion in real time without disrupting the live system",
      "Continuous threat of fraud and abuse requiring active monitoring and intervention",
      "Coordination across multiple teams under live production pressure",
    ],
    whatIDid: [
      "Led the cross-functional execution team, coordinating efforts across engineering, operations, and partner teams",
      "Drove real-time decision-making and problem-solving to address emerging risks",
      "Established a scalable ingestion strategy to increase code supply without overloading system infrastructure",
      "Implemented continuous fraud monitoring and response workflows to detect and block bad actors",
      "Maintained stakeholder alignment through clear communication and rapid escalation pathways",
    ],
    impact: [
      "Successfully avoided code depletion and associated legal risk",
      "Scaled system capacity to meet multi-fold demand growth without disruption",
      "Maintained program stability throughout live operations",
      "Minimized fraud impact through active monitoring and intervention",
    ],
    insight:
      "Execution at scale is defined by how effectively teams adapt when real-world demand exceeds expectations.",
    image: "/casestudy-3.webp",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
