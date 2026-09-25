import { CenterStat, DecisionBreakdown, DirectorateStat, ResearcherStat, TeamStat } from '../types/dashboard';
import { ALL_CONCEPT_NOTES, calculateTeamStats } from './conceptNotesData';

export const OARI_METRICS = {
  title: 'OROMIA AGRICULTURAL RESEARCH INSTITUTE',
  subtitle: 'Research Concept Note Review Decision Summary Report',
  cycle: 'September 04–17, 2026',
  totalSubmissions: 1734,
  totalApproved: 1253,
  approvalPercentage: 72.3,
  directAcceptance: 1136,
  directAcceptancePercentage: 65.5,
  modAcceptance: 33,
  modAcceptancePercentage: 1.9,
  condAcceptance: 84,
  condAcceptancePercentage: 4.8,
  rejectedPendedMerged: 481,
  rejectedCount: 457,
  pendedCount: 14,
  mergedCount: 10,
  rejectedPercentage: 27.7,
  directoratesCount: 9,
  researchCentersCount: 17,
  totalCentersEvaluated: 20
};

export const DECISION_BREAKDOWN_DATA: DecisionBreakdown[] = [
  { category: 'Accepted (Direct)', count: 1136, percentage: 65.5, color: '#10B981' },
  { category: 'Conditionally Accepted', count: 84, percentage: 4.8, color: '#3B82F6' },
  { category: 'Accepted with Modifications', count: 33, percentage: 1.9, color: '#F59E0B' },
  { category: 'Rejected / Pended / Merged', count: 481, percentage: 27.7, color: '#EF4444' }
];

export const DIRECTORATE_DATA: DirectorateStat[] = [
  { id: '1', name: 'Crop', submitted: 452, accepted: 426, acceptedWithMod: 0, condAccepted: 0, rejected: 25, acceptanceRate: 94.2 },
  { id: '2', name: 'Livestock', submitted: 340, accepted: 168, acceptedWithMod: 29, condAccepted: 2, rejected: 140, acceptanceRate: 58.5 },
  { id: '3', name: 'Natural Resource', submitted: 268, accepted: 155, acceptedWithMod: 0, condAccepted: 25, rejected: 86, acceptanceRate: 67.2 },
  { id: '4', name: 'A/Engineering', submitted: 214, accepted: 89, acceptedWithMod: 0, condAccepted: 27, rejected: 98, acceptanceRate: 54.2 },
  { id: '5', name: 'SEAE', submitted: 183, accepted: 127, acceptedWithMod: 0, condAccepted: 23, rejected: 33, acceptanceRate: 82.0 },
  { id: '6', name: 'Protection', submitted: 158, accepted: 118, acceptedWithMod: 0, condAccepted: 0, rejected: 37, acceptanceRate: 74.7 },
  { id: '7', name: 'Coffee and Tea', submitted: 60, accepted: 24, acceptedWithMod: 4, condAccepted: 7, rejected: 23, acceptanceRate: 58.3 },
  { id: '8', name: 'Biotechnology', submitted: 30, accepted: 7, acceptedWithMod: 0, condAccepted: 0, rejected: 11, acceptanceRate: 23.3 },
  { id: '9', name: 'Food Science', submitted: 29, accepted: 22, acceptedWithMod: 0, condAccepted: 0, rejected: 4, acceptanceRate: 75.9 }
];

export const RESEARCH_CENTER_DATA: CenterStat[] = [
  { id: '1', name: 'ATARC', submitted: 256, accepted: 145, acceptedWithMod: 14, condAccepted: 4, rejected: 80, acceptanceRate: 63.7 },
  { id: '2', name: 'BARC', submitted: 218, accepted: 158, acceptedWithMod: 6, condAccepted: 12, rejected: 39, acceptanceRate: 80.7 },
  { id: '3', name: 'SARC', submitted: 205, accepted: 154, acceptedWithMod: 0, condAccepted: 5, rejected: 44, acceptanceRate: 77.6 },
  { id: '4', name: 'Fedis', submitted: 187, accepted: 123, acceptedWithMod: 1, condAccepted: 10, rejected: 53, acceptanceRate: 71.7 },
  { id: '5', name: 'Bore', submitted: 143, accepted: 101, acceptedWithMod: 0, condAccepted: 9, rejected: 33, acceptanceRate: 76.9 },
  { id: '6', name: 'Mechara', submitted: 116, accepted: 71, acceptedWithMod: 4, condAccepted: 7, rejected: 33, acceptanceRate: 70.7 },
  { id: '7', name: 'YPDARC', submitted: 101, accepted: 64, acceptedWithMod: 6, condAccepted: 1, rejected: 30, acceptanceRate: 70.3 },
  { id: '8', name: 'Harosabu', submitted: 86, accepted: 69, acceptedWithMod: 1, condAccepted: 0, rejected: 16, acceptanceRate: 81.4 },
  { id: '9', name: 'Jimma', submitted: 66, accepted: 23, acceptedWithMod: 0, condAccepted: 7, rejected: 36, acceptanceRate: 45.5 },
  { id: '10', name: 'Fitche', submitted: 65, accepted: 47, acceptedWithMod: 0, condAccepted: 6, rejected: 12, acceptanceRate: 81.5 },
  { id: '11', name: 'BEARC', submitted: 59, accepted: 30, acceptedWithMod: 0, condAccepted: 8, rejected: 21, acceptanceRate: 64.4 },
  { id: '12', name: 'Bedele', submitted: 52, accepted: 40, acceptedWithMod: 0, condAccepted: 4, rejected: 8, acceptanceRate: 84.6 },
  { id: '13', name: 'Asela', submitted: 37, accepted: 21, acceptedWithMod: 0, condAccepted: 3, rejected: 13, acceptanceRate: 64.9 },
  { id: '14', name: 'HBRC', submitted: 33, accepted: 20, acceptedWithMod: 1, condAccepted: 2, rejected: 10, acceptanceRate: 69.7 },
  { id: '15', name: 'Nekemte', submitted: 31, accepted: 12, acceptedWithMod: 0, condAccepted: 3, rejected: 14, acceptanceRate: 48.4 },
  { id: '16', name: 'Food Science', submitted: 29, accepted: 22, acceptedWithMod: 0, condAccepted: 0, rejected: 4, acceptanceRate: 75.9 },
  { id: '17', name: 'Fishery', submitted: 26, accepted: 21, acceptedWithMod: 0, condAccepted: 0, rejected: 5, acceptanceRate: 80.8 },
  { id: '18', name: 'BSRC', submitted: 22, accepted: 13, acceptedWithMod: 0, condAccepted: 3, rejected: 6, acceptanceRate: 72.7 },
  { id: '19', name: 'Biotechnology', submitted: 1, accepted: 1, acceptedWithMod: 0, condAccepted: 0, rejected: 0, acceptanceRate: 100.0 },
  { id: '20', name: 'ATO', submitted: 1, accepted: 1, acceptedWithMod: 0, condAccepted: 0, rejected: 0, acceptanceRate: 100.0 }
];

export const RESEARCHERS_DATA: ResearcherStat[] = [
  { no: 1, name: 'Zeleke L.', center: 'Fedis', directorate: 'Crop', totalSub: 17, fullyAcc: 17, condAcc: 0, totalApp: 17, accRate: 100.0 },
  { no: 2, name: 'Adane A.', center: 'BARC', directorate: 'Crop', totalSub: 17, fullyAcc: 17, condAcc: 0, totalApp: 17, accRate: 100.0 },
  { no: 3, name: 'Ashenafi T. and Beshir H.', center: 'ATARC', directorate: 'Crop', totalSub: 17, fullyAcc: 16, condAcc: 0, totalApp: 16, accRate: 94.1 },
  { no: 4, name: 'Feyera T.', center: 'BARC', directorate: 'Crop', totalSub: 13, fullyAcc: 13, condAcc: 0, totalApp: 13, accRate: 100.0 },
  { no: 5, name: 'Aliyi K.', center: 'Bore', directorate: 'Crop', totalSub: 13, fullyAcc: 13, condAcc: 0, totalApp: 13, accRate: 100.0 },
  { no: 6, name: 'Habte B', center: 'Fedis', directorate: 'Crop', totalSub: 11, fullyAcc: 11, condAcc: 0, totalApp: 11, accRate: 100.0 },
  { no: 7, name: 'Aschalew M & Hiwot S.', center: 'SARC', directorate: 'Crop', totalSub: 11, fullyAcc: 11, condAcc: 0, totalApp: 11, accRate: 100.0 },
  { no: 8, name: 'Girma T', center: 'Bore', directorate: 'C/Protection', totalSub: 14, fullyAcc: 11, condAcc: 0, totalApp: 11, accRate: 78.6 },
  { no: 9, name: 'Belay Asmare and Tadele Tadesse', center: 'SARC', directorate: 'Crop', totalSub: 10, fullyAcc: 10, condAcc: 0, totalApp: 10, accRate: 100.0 },
  { no: 10, name: 'Dereje A', center: 'Harosabu', directorate: 'Crop', totalSub: 11, fullyAcc: 10, condAcc: 0, totalApp: 10, accRate: 90.9 },
  { no: 11, name: 'Asfaw. N. and Beriso. B. and Yassin.E', center: 'ATARC', directorate: 'SEAE', totalSub: 17, fullyAcc: 9, condAcc: 1, totalApp: 10, accRate: 58.8 },
  { no: 12, name: 'Mekonnen Diribsa', center: 'BARC', directorate: 'Livestock', totalSub: 9, fullyAcc: 9, condAcc: 0, totalApp: 9, accRate: 100.0 },
  { no: 13, name: 'Gudeta B.', center: 'BARC', directorate: 'Crop', totalSub: 9, fullyAcc: 9, condAcc: 0, totalApp: 9, accRate: 100.0 },
  { no: 14, name: 'Geleta G.', center: 'BARC', directorate: 'Crop', totalSub: 9, fullyAcc: 9, condAcc: 0, totalApp: 9, accRate: 100.0 },
  { no: 15, name: 'Megersa A and Adisu A', center: 'SARC', directorate: 'C/Protection', totalSub: 14, fullyAcc: 9, condAcc: 0, totalApp: 9, accRate: 64.3 },
  { no: 16, name: 'Selam H. & Temesgen D.', center: 'ATARC', directorate: 'Crop', totalSub: 8, fullyAcc: 8, condAcc: 0, totalApp: 8, accRate: 100.0 },
  { no: 17, name: 'Mulatu A., Ahmed M. and Meti T', center: 'SARC', directorate: 'Crop', totalSub: 8, fullyAcc: 8, condAcc: 0, totalApp: 8, accRate: 100.0 },
  { no: 18, name: 'Gemechu E. & Birhane I.', center: 'SARC', directorate: 'Crop', totalSub: 8, fullyAcc: 8, condAcc: 0, totalApp: 8, accRate: 100.0 },
  { no: 19, name: 'Geleta N.', center: 'Fitche', directorate: 'Crop', totalSub: 8, fullyAcc: 8, condAcc: 0, totalApp: 8, accRate: 100.0 },
  { no: 20, name: 'Dagne Kora', center: 'SARC', directorate: 'C/Protection', totalSub: 8, fullyAcc: 8, condAcc: 0, totalApp: 8, accRate: 100.0 },
  { no: 21, name: 'Arega A.', center: 'Bore', directorate: 'Crop', totalSub: 9, fullyAcc: 8, condAcc: 0, totalApp: 8, accRate: 88.9 },
  { no: 22, name: 'Temesgen D. & Selam H.', center: 'ATARC', directorate: 'Crop', totalSub: 7, fullyAcc: 7, condAcc: 0, totalApp: 7, accRate: 100.0 },
  { no: 23, name: 'Tekalign A.', center: 'Bore', directorate: 'Crop', totalSub: 7, fullyAcc: 7, condAcc: 0, totalApp: 7, accRate: 100.0 },
  { no: 24, name: 'Mohammed J.', center: 'Fedis', directorate: 'Crop', totalSub: 7, fullyAcc: 7, condAcc: 0, totalApp: 7, accRate: 100.0 },
  { no: 25, name: 'Ejigu I.', center: 'YPDARC', directorate: 'Crop', totalSub: 7, fullyAcc: 7, condAcc: 0, totalApp: 7, accRate: 100.0 },
  { no: 26, name: 'Ashenafi T.', center: 'ATARC', directorate: 'Crop', totalSub: 7, fullyAcc: 7, condAcc: 0, totalApp: 7, accRate: 100.0 },
  { no: 27, name: 'Eshetu M.', center: 'BARC', directorate: 'Crop', totalSub: 8, fullyAcc: 6, condAcc: 1, totalApp: 7, accRate: 87.5 },
  { no: 28, name: 'Dr. Gebawo Tibesso', center: 'ATARC', directorate: 'Livestock', totalSub: 14, fullyAcc: 3, condAcc: 4, totalApp: 7, accRate: 50.0 },
  { no: 29, name: 'Firaol D', center: 'Fedis', directorate: 'C/Protection', totalSub: 7, fullyAcc: 6, condAcc: 0, totalApp: 6, accRate: 85.7 },
  { no: 30, name: 'Fikre Dereba', center: 'ATARC', directorate: 'Livestock', totalSub: 7, fullyAcc: 6, condAcc: 0, totalApp: 6, accRate: 85.7 },
  { no: 31, name: 'Dr Mathewos Hailu', center: 'Fishery', directorate: 'Livestock', totalSub: 7, fullyAcc: 6, condAcc: 0, totalApp: 6, accRate: 85.7 },
  { no: 32, name: 'Alemayehu A.', center: 'Bedele', directorate: 'Crop', totalSub: 8, fullyAcc: 6, condAcc: 0, totalApp: 6, accRate: 75.0 },
  { no: 33, name: 'Ketema Bekele', center: 'Bore', directorate: 'Livestock', totalSub: 9, fullyAcc: 6, condAcc: 0, totalApp: 6, accRate: 66.7 },
  { no: 34, name: 'Alemu Tolosa', center: 'Fedis', directorate: 'NR', totalSub: 10, fullyAcc: 2, condAcc: 4, totalApp: 6, accRate: 60.0 },
  { no: 35, name: 'Zelalem Shalemaw', center: 'ATARC', directorate: 'A/Enjineering', totalSub: 7, fullyAcc: 5, condAcc: 0, totalApp: 5, accRate: 71.4 },
  { no: 36, name: 'Tesfaye Y', center: 'SARC', directorate: 'C/Protection', totalSub: 8, fullyAcc: 5, condAcc: 0, totalApp: 5, accRate: 62.5 },
  { no: 37, name: 'Jitu A.', center: 'SARC', directorate: 'Crop', totalSub: 8, fullyAcc: 5, condAcc: 0, totalApp: 5, accRate: 62.5 },
  { no: 38, name: 'Musa Abdella', center: 'Fedis', directorate: 'NR', totalSub: 9, fullyAcc: 5, condAcc: 0, totalApp: 5, accRate: 55.6 },
  { no: 39, name: 'Kabna A', center: 'BARC', directorate: 'C/Protection', totalSub: 9, fullyAcc: 5, condAcc: 0, totalApp: 5, accRate: 55.6 },
  { no: 40, name: 'Mekonen Wolditsadik', center: 'ATARC', directorate: 'Livestock', totalSub: 10, fullyAcc: 4, condAcc: 1, totalApp: 5, accRate: 50.0 },
  { no: 41, name: 'Wubshet Tesfaye.', center: 'SARC', directorate: 'Livestock', totalSub: 10, fullyAcc: 5, condAcc: 0, totalApp: 5, accRate: 50.0 },
  { no: 42, name: 'Teshale Jabessa', center: 'Bore', directorate: 'Livestock', totalSub: 11, fullyAcc: 5, condAcc: 0, totalApp: 5, accRate: 45.5 },
  { no: 43, name: 'Tesfaye Mersha', center: 'BARC', directorate: 'Livestock', totalSub: 7, fullyAcc: 2, condAcc: 2, totalApp: 4, accRate: 57.1 },
  { no: 44, name: 'Duresa T.', center: 'BEARC', directorate: 'A/Enjineering', totalSub: 7, fullyAcc: 3, condAcc: 1, totalApp: 4, accRate: 57.1 },
  { no: 45, name: 'Tamrat Dinkale', center: 'Mechara', directorate: 'Livestock', totalSub: 7, fullyAcc: 4, condAcc: 0, totalApp: 4, accRate: 57.1 },
  { no: 46, name: 'Megersa Daba', center: 'Food Science', directorate: 'Food Science', totalSub: 7, fullyAcc: 4, condAcc: 0, totalApp: 4, accRate: 57.1 },
  { no: 47, name: 'Ababa Ch', center: 'Mechara', directorate: 'Coffee and Tea', totalSub: 9, fullyAcc: 3, condAcc: 1, totalApp: 4, accRate: 44.4 },
  { no: 48, name: 'Daniel A', center: 'SARC', directorate: 'NR', totalSub: 8, fullyAcc: 2, condAcc: 1, totalApp: 3, accRate: 37.5 },
  { no: 49, name: 'Ashebir Worku', center: 'ATARC', directorate: 'Livestock', totalSub: 8, fullyAcc: 0, condAcc: 1, totalApp: 1, accRate: 12.5 },
  { no: 50, name: 'Tolasa Berhanu', center: 'Jimma', directorate: 'A/Enjineering', totalSub: 8, fullyAcc: 1, condAcc: 0, totalApp: 1, accRate: 12.5 }
];

export const COMMODITY_TEAMS_DATA: TeamStat[] = calculateTeamStats(ALL_CONCEPT_NOTES);

export const REPORT_HIGHLIGHTS = [
  {
    name: 'Zeleke L.',
    detail: 'Fedis Center / Crop Directorate: 17 Submissions — 17 Approved (100%)',
    stat: '17/17 (100%)'
  },
  {
    name: 'Adane A.',
    detail: 'BARC / Crop Directorate: 17 Submissions — 17 Approved (100%)',
    stat: '17/17 (100%)'
  },
  {
    name: 'Aliyi K.',
    detail: 'Bore Center / Crop Directorate: 13 Submissions — 13 Approved (100%)',
    stat: '13/13 (100%)'
  },
  {
    name: 'Feyera T.',
    detail: 'BARC / Crop Directorate: 13 Submissions — 13 Approved (100%)',
    stat: '13/13 (100%)'
  },
  {
    name: 'Habte B.',
    detail: 'Fedis Center / Crop Directorate: 11 Submissions — 11 Approved (100%)',
    stat: '11/11 (100%)'
  },
  {
    name: 'Ashenafi T. & Beshir H.',
    detail: 'ATARC / Crop Directorate: 17 Submissions — 16 Approved (94.1%)',
    stat: '16/17 (94.1%)'
  },
  {
    name: 'Asfaw N., Beriso B., & Yassin E.',
    detail: 'ATARC / SEAE Directorate: 17 Submissions — 10 Approved (58.8%)',
    stat: '10/17 (58.8%)'
  },
  {
    name: 'Aschalew M. & Hiwot S.',
    detail: 'SARC / Crop Directorate: 11 Submissions — 11 Approved (100%)',
    stat: '11/11 (100%)'
  },
  {
    name: 'Belay Asmare & Tadele Tadesse',
    detail: 'SARC / Crop Directorate: 10 Submissions — 10 Approved (100%)',
    stat: '10/10 (100%)'
  }
];
