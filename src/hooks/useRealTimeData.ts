import { useCallback, useEffect, useMemo, useState } from 'react';
import { ALL_CONCEPT_NOTES, calculateTeamStats } from '../data/conceptNotesData';
import { OARI_METRICS, RESEARCH_CENTER_DATA, RESEARCHERS_DATA } from '../data/oariData';
import {
  CenterStat,
  ConceptNote,
  DecisionType,
  DirectorateStat,
  ResearcherStat,
  ReviewAuditLog,
  TeamStat
} from '../types/dashboard';

export function useRealTimeData() {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [speed, setSpeed] = useState<1 | 2 | 5>(1);
  const [conceptNotes, setConceptNotes] = useState<ConceptNote[]>(ALL_CONCEPT_NOTES);
  const [researchers, setResearchers] = useState<ResearcherStat[]>(RESEARCHERS_DATA);
  const [pulseActive, setPulseActive] = useState<boolean>(false);
  const [lastPulseTime, setLastPulseTime] = useState<Date>(new Date());

  // Dynamically recalculate Per-Team Performance directly from the authentic Screened CNs
  const teams: TeamStat[] = useMemo(() => {
    return calculateTeamStats(conceptNotes);
  }, [conceptNotes]);

  // Dynamically recalculate Directorate totals from Screened CNs
  const directorates: DirectorateStat[] = useMemo(() => {
    const dirOrder = [
      'Crop',
      'Livestock',
      'Natural Resource',
      'A/Engineering',
      'SEAE',
      'Protection',
      'Coffee and Tea',
      'Biotechnology',
      'Food Science'
    ];

    return dirOrder.map((name, idx) => {
      const dNotes = conceptNotes.filter((n) => n.directorate.toLowerCase() === name.toLowerCase());
      const submitted = dNotes.length;
      let accepted = 0;
      let acceptedWithMod = 0;
      let condAccepted = 0;
      let rejected = 0;
      let pended = 0;
      let merged = 0;

      for (const n of dNotes) {
        if (n.decision === 'Accepted') accepted++;
        else if (n.decision === 'Accepted with modification') acceptedWithMod++;
        else if (n.decision === 'Conditionally Accepted') condAccepted++;
        else if (n.decision === 'Pended') pended++;
        else if (n.decision === 'Merged') merged++;
        else rejected++;
      }

      const totalApproved = accepted + acceptedWithMod + condAccepted;
      return {
        id: String(idx + 1),
        name,
        submitted,
        accepted,
        acceptedWithMod,
        condAccepted,
        rejected,
        pended,
        merged,
        acceptanceRate: submitted > 0 ? Number(((totalApproved / submitted) * 100).toFixed(1)) : 0
      };
    });
  }, [conceptNotes]);

  // Dynamically recalculate Research Center totals from Screened CNs
  const centers: CenterStat[] = useMemo(() => {
    const centerNames = RESEARCH_CENTER_DATA.map((c) => c.name);
    return centerNames.map((name, idx) => {
      const cNotes = conceptNotes.filter((n) => n.center.toLowerCase() === name.toLowerCase());
      const submitted = cNotes.length;
      let accepted = 0;
      let acceptedWithMod = 0;
      let condAccepted = 0;
      let rejected = 0;
      let pended = 0;
      let merged = 0;

      for (const n of cNotes) {
        if (n.decision === 'Accepted') accepted++;
        else if (n.decision === 'Accepted with modification') acceptedWithMod++;
        else if (n.decision === 'Conditionally Accepted') condAccepted++;
        else if (n.decision === 'Pended') pended++;
        else if (n.decision === 'Merged') merged++;
        else rejected++;
      }

      const totalApproved = accepted + acceptedWithMod + condAccepted;
      return {
        id: String(idx + 1),
        name,
        submitted,
        accepted,
        acceptedWithMod,
        condAccepted,
        rejected,
        pended,
        merged,
        acceptanceRate: submitted > 0 ? Number(((totalApproved / submitted) * 100).toFixed(1)) : 0
      };
    });
  }, [conceptNotes]);

  // Dynamically recalculate Overall Institutional Metrics from Screened CNs
  const oariStats = useMemo(() => {
    const total = conceptNotes.length;
    let direct = 0;
    let mod = 0;
    let cond = 0;
    let rej = 0;
    let pended = 0;
    let merged = 0;

    for (const n of conceptNotes) {
      if (n.decision === 'Accepted') direct++;
      else if (n.decision === 'Accepted with modification') mod++;
      else if (n.decision === 'Conditionally Accepted') cond++;
      else if (n.decision === 'Pended') pended++;
      else if (n.decision === 'Merged') merged++;
      else rej++;
    }

    const totalApproved = direct + mod + cond;
    const totalRejectedMerged = rej + pended + merged;

    return {
      ...OARI_METRICS,
      totalSubmissions: total,
      totalApproved,
      approvalPercentage: total > 0 ? Number(((totalApproved / total) * 100).toFixed(1)) : 0,
      directAcceptance: direct,
      directAcceptancePercentage: total > 0 ? Number(((direct / total) * 100).toFixed(1)) : 0,
      modAcceptance: mod,
      modAcceptancePercentage: total > 0 ? Number(((mod / total) * 100).toFixed(1)) : 0,
      condAcceptance: cond,
      condAcceptancePercentage: total > 0 ? Number(((cond / total) * 100).toFixed(1)) : 0,
      rejectedPendedMerged: totalRejectedMerged,
      rejectedCount: rej,
      pendedCount: pended,
      mergedCount: merged,
      rejectedPercentage: total > 0 ? Number(((totalRejectedMerged / total) * 100).toFixed(1)) : 0,
      directoratesCount: 9,
      researchCentersCount: 17,
      totalCentersEvaluated: 20
    };
  }, [conceptNotes]);

  const [auditLogs, setAuditLogs] = useState<ReviewAuditLog[]>([
    {
      id: 'LOG-101',
      conceptNoteNo: 1,
      title: 'Influence of Different Seeding Rate on the Yield and Yield Component of Food Barley in East Shewa Zone',
      researcher: 'Selam H. & Temesgen D.',
      center: 'ATARC',
      directorate: 'Crop',
      team: 'Cereals',
      newDecision: 'Accepted',
      comments: 'add N as additional factor; design be factorial RCBD; locations be three',
      timestamp: '1 min ago',
      evaluator: 'Crop Directorate Review Panel'
    },
    {
      id: 'LOG-102',
      conceptNoteNo: 453,
      title: 'Genetic Evaluation and Observation Trial of Desirable Traits through direct and reciprocal crossing of Tetra H',
      researcher: 'Dr. Gebawo Tibesso',
      center: 'ATARC',
      directorate: 'Livestock',
      team: 'Poultry Science',
      newDecision: 'Accepted with modification',
      comments: 'Clearly indicate parental lines with their merits; focus on disease resistance',
      timestamp: '3 mins ago',
      evaluator: 'Livestock Directorate Review Panel'
    },
    {
      id: 'LOG-103',
      conceptNoteNo: 976,
      title: 'Identification of yellow rust Resistance in Elite Wheat Genotypes using SSR markers in the Bale Highlands',
      researcher: 'Dagne Kora',
      center: 'SARC',
      directorate: 'Protection',
      team: 'Plant Pathology',
      newDecision: 'Accepted',
      comments: 'Use CIMMYT resistant allele standards',
      timestamp: '5 mins ago',
      evaluator: 'Crop Protection Review Panel'
    },
    {
      id: 'LOG-104',
      conceptNoteNo: 1281,
      title: 'Identification and Prioritization of Suitable Rain Water Harvesting Sites Using GIS-Based Spatial Analysis',
      researcher: 'ATARC IDWH Team',
      center: 'ATARC',
      directorate: 'A/Engineering',
      team: 'Irrigation & Drainage (IDWH)',
      newDecision: 'Accepted',
      comments: 'Integrate DEM elevation slope and soil infiltration rate layers',
      timestamp: '8 mins ago',
      evaluator: 'Agricultural Engineering Panel'
    },
    {
      id: 'LOG-105',
      conceptNoteNo: 50,
      title: 'Influence of Green Manure and fertilizer rates on Soil Fertility and Productivity of Finger Millet',
      researcher: 'BARC Agronomy Team',
      center: 'BARC',
      directorate: 'Crop',
      team: 'Cereals',
      newDecision: 'Rejected',
      comments: 'One season is not enough for the activity - growing green manure then finger millet',
      timestamp: '12 mins ago',
      evaluator: 'Agronomy Technical Committee'
    }
  ]);

  const triggerPulse = useCallback(() => {
    setPulseActive(true);
    setLastPulseTime(new Date());
    setTimeout(() => setPulseActive(false), 800);
  }, []);

  // Update an existing Concept Note Decision and Comment
  const updateConceptNoteDecision = useCallback(
    (no: number, newDecision: DecisionType, comments?: string, evaluator: string = 'Editorial Reviewer') => {
      let targetNote: ConceptNote | undefined;

      setConceptNotes((prev) => {
        return prev.map((note) => {
          if (note.no === no) {
            targetNote = note;
            return {
              ...note,
              decision: newDecision,
              comments: comments ?? note.comments,
              evaluatedAt: new Date().toISOString().split('T')[0]
            };
          }
          return note;
        });
      });

      if (targetNote) {
        const log: ReviewAuditLog = {
          id: `LOG-${Date.now().toString().slice(-4)}`,
          conceptNoteNo: no,
          title: targetNote.title,
          researcher: targetNote.initiators,
          center: targetNote.center,
          directorate: targetNote.directorate,
          team: targetNote.team,
          oldDecision: targetNote.decision,
          newDecision,
          comments: comments || targetNote.comments,
          timestamp: 'Just now',
          evaluator
        };
        setAuditLogs((prev) => [log, ...prev.slice(0, 49)]);
      }

      triggerPulse();
    },
    [triggerPulse]
  );

  // Add a new Concept Note Proposal
  const addConceptNote = useCallback(
    (newNote: Omit<ConceptNote, 'no'>) => {
      const nextNo = conceptNotes.length + 1;
      const fullNote: ConceptNote = {
        ...newNote,
        no: nextNo,
        evaluatedAt: new Date().toISOString().split('T')[0]
      };

      setConceptNotes((prev) => [fullNote, ...prev]);

      const log: ReviewAuditLog = {
        id: `LOG-${Date.now().toString().slice(-4)}`,
        conceptNoteNo: nextNo,
        title: newNote.title,
        researcher: newNote.initiators,
        center: newNote.center,
        directorate: newNote.directorate,
        team: newNote.team,
        newDecision: newNote.decision,
        comments: newNote.comments || 'Newly registered concept note in 2020 EC review cycle',
        timestamp: 'Just now',
        evaluator: 'Editorial Panel'
      };
      setAuditLogs((prev) => [log, ...prev.slice(0, 49)]);
      triggerPulse();
    },
    [conceptNotes.length, triggerPulse]
  );

  // Periodic simulation: active panel reviewing proposals
  useEffect(() => {
    if (!isLive) return;

    const intervalMs = Math.round(5000 / speed);

    const timer = setInterval(() => {
      if (Math.random() < 0.4) {
        const randomIdx = Math.floor(Math.random() * Math.min(conceptNotes.length, 50));
        const note = conceptNotes[randomIdx];

        if (note) {
          const evaluators = [
            'OARI Scientific Review Committee',
            'Directorate Peer Review Panel',
            'Regional Agronomy Quality Board',
            'Socio-Economic Evaluation Taskforce',
            'Breeding & Genetics Panel'
          ];
          const chosenEvaluator = evaluators[Math.floor(Math.random() * evaluators.length)];

          const log: ReviewAuditLog = {
            id: `LOG-${Date.now().toString().slice(-4)}`,
            conceptNoteNo: note.no,
            title: note.title,
            researcher: note.initiators,
            center: note.center,
            directorate: note.directorate,
            team: note.team,
            newDecision: note.decision,
            comments: note.comments || `Verified technical checklist: scientific novelty and agroecology fit for ${note.center}`,
            timestamp: 'Just now',
            evaluator: chosenEvaluator
          };

          setAuditLogs((prev) => [log, ...prev.slice(0, 49)]);
          triggerPulse();
        }
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isLive, speed, conceptNotes, triggerPulse]);

  return {
    isLive,
    setIsLive,
    speed,
    setSpeed,
    conceptNotes,
    directorates,
    centers,
    teams,
    researchers,
    oariStats,
    auditLogs,
    pulseActive,
    lastPulseTime,
    updateConceptNoteDecision,
    addConceptNote
  };
}
