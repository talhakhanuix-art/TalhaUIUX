export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  isConcept: boolean;
  platform: 'Mobile App' | 'Web App / SaaS' | 'Game UI';
  year: string;
  caseStudy: {
    overview: string;
    problemStatement: string;
    designGoals: string[];
    targetUsers: {
      persona: string;
      role: string;
      painPoint: string;
    }[];
    userFlowSteps: {
      step: number;
      action: string;
      description: string;
    }[];
    wireframeNotes: string;
    finalScreensNotes: string;
    designDecisions: {
      decision: string;
      rationale: string;
    }[];
    metricsOrOutcomes: string[];
    prototypeUrl?: string;
  };
}

export interface Skill {
  name: string;
  category: 'Core Discipline' | 'Execution' | 'Systems';
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  step: number;
  name: string;
  title: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  badge: string;
}
