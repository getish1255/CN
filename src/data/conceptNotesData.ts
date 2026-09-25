import { ConceptNote, TeamStat } from '../types/dashboard';
import rawConceptNotes from './allConceptNotesData.json';

// All 1,734 authentic Concept Notes extracted from official OARI 2020 EC Screening Document
export const ALL_CONCEPT_NOTES: ConceptNote[] = rawConceptNotes as ConceptNote[];

// Recalculates exact performance metrics per team dynamically from any array of Concept Notes
export function calculateTeamStats(notes: ConceptNote[]): TeamStat[] {
  const teamMap = new Map<string, {
    name: string;
    directorate: string;
    submitted: number;
    accepted: number;
    acceptedWithMod: number;
    condAccepted: number;
    rejected: number;
    pended: number;
    merged: number;
    centers: Set<string>;
  }>();

  for (const n of notes) {
    const key = `${n.team}___${n.directorate}`;
    if (!teamMap.has(key)) {
      teamMap.set(key, {
        name: n.team,
        directorate: n.directorate,
        submitted: 0,
        accepted: 0,
        acceptedWithMod: 0,
        condAccepted: 0,
        rejected: 0,
        pended: 0,
        merged: 0,
        centers: new Set()
      });
    }
    const t = teamMap.get(key)!;
    t.submitted++;
    t.centers.add(n.center);
    if (n.decision === 'Accepted') {
      t.accepted++;
    } else if (n.decision === 'Accepted with modification') {
      t.acceptedWithMod++;
    } else if (n.decision === 'Conditionally Accepted') {
      t.condAccepted++;
    } else if (n.decision === 'Pended') {
      t.pended++;
    } else if (n.decision === 'Merged') {
      t.merged++;
    } else {
      t.rejected++;
    }
  }

  return Array.from(teamMap.values())
    .map((t) => {
      const approved = t.accepted + t.acceptedWithMod + t.condAccepted;
      return {
        name: t.name,
        directorate: t.directorate,
        submitted: t.submitted,
        accepted: t.accepted,
        acceptedWithMod: t.acceptedWithMod,
        condAccepted: t.condAccepted,
        rejected: t.rejected,
        pended: t.pended,
        merged: t.merged,
        acceptanceRate: t.submitted > 0 ? Number(((approved / t.submitted) * 100).toFixed(1)) : 0,
        centersCount: t.centers.size
      };
    })
    .sort((a, b) => b.submitted - a.submitted);
}
