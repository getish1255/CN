export type DecisionType =
  | 'Accepted'
  | 'Accepted with modification'
  | 'Conditionally Accepted'
  | 'Rejected'
  | 'Pended'
  | 'Merged';

export interface ConceptNote {
  no: number;
  center: string;
  directorate: string;
  team: string;
  title: string;
  initiators: string;
  decision: DecisionType;
  comments?: string;
  evaluatedAt?: string;
}

export interface DirectorateStat {
  id: string;
  name: string;
  submitted: number;
  accepted: number;
  acceptedWithMod: number;
  condAccepted: number;
  rejected: number;
  pended?: number;
  merged?: number;
  acceptanceRate: number; // percentage
}

export interface CenterStat {
  id: string;
  name: string;
  submitted: number;
  accepted: number;
  acceptedWithMod: number;
  condAccepted: number;
  rejected: number;
  pended?: number;
  merged?: number;
  acceptanceRate: number;
}

export interface TeamStat {
  name: string;
  directorate: string;
  submitted: number;
  accepted: number;
  acceptedWithMod: number;
  condAccepted: number;
  rejected: number;
  pended?: number;
  merged?: number;
  acceptanceRate: number;
  centersCount?: number;
}

export interface ResearcherStat {
  no: number;
  name: string;
  center: string;
  directorate: string;
  totalSub: number;
  fullyAcc: number;
  condAcc: number;
  totalApp: number;
  accRate: number;
}

export interface DecisionBreakdown {
  category: string;
  count: number;
  percentage: number;
  color: string;
}

export interface ReviewAuditLog {
  id: string;
  conceptNoteNo: number;
  title: string;
  researcher: string;
  center: string;
  directorate: string;
  team: string;
  oldDecision?: DecisionType;
  newDecision: DecisionType;
  comments?: string;
  timestamp: string;
  evaluator: string;
}

export interface MonthlyProposalTrend {
  month: string;
  monthShort: string;
  year: number;
  submitted: number;
  approved: number;
  rejected: number;
  approvalRate: number;
  cumulativeSubmitted: number;
  cumulativeApproved: number;
  cumulativeRejected: number;
  cycleName: string;
  isProjected?: boolean;
}

export type DashboardTab =
  | 'overview'
  | 'concept-notes'
  | 'directorates'
  | 'centers'
  | 'teams'
  | 'researchers'
  | 'evaluator';
