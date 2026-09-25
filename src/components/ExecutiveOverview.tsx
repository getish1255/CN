import React from 'react';
import { CenterStat, DirectorateStat, ResearcherStat, TeamStat } from '../types/dashboard';
import { DonutChart } from './Charts/DonutChart';
import { HorizontalBarChart } from './Charts/BarChart';
import { DECISION_BREAKDOWN_DATA, REPORT_HIGHLIGHTS } from '../data/oariData';
import {
  Award,
  Building2,
  CheckCircle2,
  FileCheck,
  FileText,
  Microscope,
  TrendingUp,
  Users2,
  AlertCircle,
  Clock,
  BookOpen,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface ExecutiveOverviewProps {
  oariStats: {
    totalSubmissions: number;
    totalApproved: number;
    approvalPercentage: number;
    directAcceptance: number;
    directAcceptancePercentage: number;
    modAcceptance: number;
    modAcceptancePercentage: number;
    condAcceptance: number;
    condAcceptancePercentage: number;
    rejectedCount: number;
    pendedCount: number;
    mergedCount: number;
    rejectedPercentage: number;
    directoratesCount: number;
    researchCentersCount: number;
  };
  directorates: DirectorateStat[];
  centers: CenterStat[];
  teams: TeamStat[];
  researchers: ResearcherStat[];
  onNavigateTab: (tab: any) => void;
  onSelectResearcher: (researcher: ResearcherStat) => void;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  oariStats,
  directorates,
  centers,
  teams,
  researchers,
  onNavigateTab,
  onSelectResearcher
}) => {
  const topDirectorates = [...directorates].sort((a, b) => b.acceptanceRate - a.acceptanceRate);
  const topCentersEfficiency = [...centers].sort((a, b) => b.acceptanceRate - a.acceptanceRate).slice(0, 6);
  const highSubmissionCenters = [...centers].sort((a, b) => b.submitted - a.submitted).slice(0, 5);

  const directorateChartItems = topDirectorates.slice(0, 6).map((d) => ({
    id: d.id,
    label: d.name,
    total: d.submitted,
    approved: d.accepted + d.acceptedWithMod + d.condAccepted,
    rate: d.acceptanceRate,
    category: `${d.accepted} direct`
  }));

  return (
    <div className="space-y-6">
      {/* Official Executive Header */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <img
              src="https://iqqo.gov.et/sites/default/files/logo200.jpg"
              alt="OARI / IQQO Logo"
              className="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-700/80 shadow-md shadow-black/40 shrink-0 mt-0.5 hidden sm:block"
            />
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-md mb-2">
                <span>OROMIA AGRICULTURAL RESEARCH INSTITUTE (IQQO)</span>
                <span>·</span>
                <span>Official Decision Summary Report</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Research Concept Note Review & Evaluation Console
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                Decision Summary Report for the September 04–17, 2026 review cycle. A total of <strong>1,734 concept notes</strong> were evaluated across 9 research directorates, 20 research centers, and 32 specialized commodity disciplines.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigateTab('concept-notes')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/20 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore 1,734 Concept Notes</span>
            </button>
            <button
              onClick={() => onNavigateTab('evaluator')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Review Panel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Institutional KPI Scorecards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Total Submissions */}
        <div
          onClick={() => onNavigateTab('concept-notes')}
          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-medium">Total Concept Notes Submitted</span>
            <FileText className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              {oariStats.totalSubmissions.toLocaleString()}
            </span>
            <span className="text-xs text-slate-400 font-mono">100% evaluated</span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
            <span>9 Directorates</span>
            <span>20 Centers Evaluated</span>
          </div>
        </div>

        {/* KPI 2: Overall Approved */}
        <div
          onClick={() => onNavigateTab('concept-notes')}
          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-medium">Approved for Development</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
              {oariStats.totalApproved.toLocaleString()}
            </span>
            <span className="text-xs font-semibold text-emerald-400 font-mono">
              {oariStats.approvalPercentage}%
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
            <span>Target: &gt;70%</span>
            <span className="text-emerald-400 font-medium font-mono">Benchmark Met (+2.3%)</span>
          </div>
        </div>

        {/* KPI 3: Direct Acceptances */}
        <div
          onClick={() => onNavigateTab('directorates')}
          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-medium">Direct Full Acceptance</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              {oariStats.directAcceptance.toLocaleString()}
            </span>
            <span className="text-xs text-emerald-400 font-mono">
              {oariStats.directAcceptancePercentage}%
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
            <span>Crop Directorate: 426</span>
            <span>BARC: 158</span>
          </div>
        </div>

        {/* KPI 4: Rejections & Pendings */}
        <div
          onClick={() => onNavigateTab('concept-notes')}
          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-medium">Rejected / Pended / Merged</span>
            <AlertCircle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-rose-400 tabular-nums">
              {oariStats.rejectedCount + oariStats.pendedCount + oariStats.mergedCount}
            </span>
            <span className="text-xs text-rose-400 font-mono">
              {oariStats.rejectedPercentage}%
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
            <span>Rejected: {oariStats.rejectedCount}</span>
            <span>Pended: {oariStats.pendedCount} · Merged: {oariStats.mergedCount}</span>
          </div>
        </div>
      </div>

      {/* Main Section: Decision Category Breakdown & Top Directorate Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 4 Cols: Decision Donut */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-semibold text-white">Decision Category Breakdown</h2>
              <span className="text-xs font-mono text-slate-400">1,734 CNs</span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Institutional breakdown of direct acceptances, modifications, conditional approvals, and rejections
            </p>
          </div>

          <DonutChart
            data={DECISION_BREAKDOWN_DATA.map((d) => ({
              label: d.category,
              value: d.count,
              percentage: d.percentage,
              color: d.color
            }))}
            centerLabel="Approved"
            centerValue={`${oariStats.approvalPercentage}%`}
            size={180}
            strokeWidth={22}
          />

          <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span>Accepted with Modifications:</span>
              <span className="font-mono font-semibold text-amber-400">{oariStats.modAcceptance} (1.9%)</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Conditionally Accepted:</span>
              <span className="font-mono font-semibold text-blue-400">{oariStats.condAcceptance} (4.8%)</span>
            </div>
          </div>
        </div>

        {/* Right 8 Cols: Directorate Performance Benchmark */}
        <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Directorate Acceptance Benchmark (Table 1 Summary)
              </h2>
              <p className="text-xs text-slate-400">
                Crop Directorate achieved the highest volume (452 CNs) and highest acceptance rate (94.2%)
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('directorates')}
              className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
            >
              <span>Full Table 1</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <HorizontalBarChart
            items={directorateChartItems}
            maxTotal={460}
            totalLabel="Total Submitted"
            approvedLabel="Total Approved"
          />

          <div className="pt-3 border-t border-slate-800/60 grid grid-cols-3 gap-2 text-[11px] font-mono">
            <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Crop Directorate</span>
              <span className="text-emerald-400 font-bold">426 / 452 (94.2%)</span>
            </div>
            <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">SEAE Directorate</span>
              <span className="text-blue-400 font-bold">150 / 183 (82.0%)</span>
            </div>
            <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Food Science</span>
              <span className="text-emerald-400 font-bold">22 / 29 (75.9%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recalculated Commodity & Research Teams Performance Section */}
      <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <Microscope className="w-3.5 h-3.5" />
              <span>Authentic Screened CNs Recalculation</span>
              <span>·</span>
              <span>{teams.length} Specialized Research Disciplines</span>
            </div>
            <h2 className="text-base font-bold text-white">
              Commodity & Research Team Performance Matrix
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Recalculated directly per team from the 1,734 screened concept notes in the official evaluation report.
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('teams')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/50 hover:bg-blue-900/50 border border-blue-800/60 rounded-lg transition-colors self-start sm:self-center"
          >
            <span>Explore All {teams.length} Teams Matrix</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Grid of Top Teams Recalculated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          {teams.slice(0, 4).map((t) => {
            const approved = t.accepted + t.acceptedWithMod + t.condAccepted;
            return (
              <div
                key={t.name}
                onClick={() => onNavigateTab('teams')}
                className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1 font-sans">
                    <span className="font-semibold text-slate-200 truncate">{t.name}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded shrink-0 ml-1">
                      {t.directorate}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {approved} approved / {t.submitted} submitted
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Acceptance Rate:</span>
                  <span
                    className={`font-bold ${
                      t.acceptanceRate >= 80 ? 'text-emerald-400' : 'text-blue-400'
                    }`}
                  >
                    {t.acceptanceRate.toFixed(1)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Per-Team Summary Banner */}
        <div className="p-3 rounded-lg bg-slate-800/30 border border-slate-800/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              <strong>Volume Leadership:</strong> Pulses (195 CNs), Cereals (168 CNs), Feeds & Forage (118 CNs), Soil Fertility Improvement (113 CNs).
            </span>
          </div>
          <button
            onClick={() => onNavigateTab('teams')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
          >
            <span>View Full Ranking</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Two Column Section: Top Research Centers & Top Researchers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Research Centers Performance Card */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Top Performing Research Centers (Table 2)
              </h2>
              <p className="text-xs text-slate-400">
                Highest approval efficiency and submission leadership
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('centers')}
              className="text-xs text-blue-400 hover:text-blue-300 font-medium"
            >
              All 20 Centers →
            </button>
          </div>

          <div className="space-y-2 mt-3">
            {topCentersEfficiency.map((c) => (
              <div
                key={c.id}
                className="p-2.5 rounded-lg bg-slate-800/30 border border-slate-800/50 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-200">{c.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      ({c.submitted} submitted)
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {c.accepted} accepted · {c.rejected} rejected
                  </div>
                </div>

                <span
                  className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                    c.acceptanceRate >= 80
                      ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40'
                      : 'text-blue-400 bg-blue-950/60 border border-blue-800/40'
                  }`}
                >
                  {c.acceptanceRate.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
            <strong className="text-slate-300">High-Submission Leadership:</strong>{' '}
            {highSubmissionCenters.map((c) => `${c.name} (${c.submitted})`).join(', ')}
          </div>
        </div>

        {/* Top Productive Researchers Card */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Top Productive Researchers (Table 3)
              </h2>
              <p className="text-xs text-slate-400">
                100% approval rate leaders and high proposal volume
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('researchers')}
              className="text-xs text-blue-400 hover:text-blue-300 font-medium"
            >
              All 50 Researchers →
            </button>
          </div>

          <div className="space-y-2 mt-3">
            {researchers.slice(0, 6).map((r) => (
              <div
                key={r.no}
                onClick={() => onSelectResearcher(r)}
                className="p-2.5 rounded-lg bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/60 transition-colors cursor-pointer flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 text-[11px] font-mono flex items-center justify-center font-bold">
                    {r.no}
                  </span>
                  <div>
                    <div className="font-medium text-white">{r.name}</div>
                    <div className="text-[11px] text-slate-400">
                      {r.center} · {r.directorate}
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="text-slate-200 font-bold tabular-nums">
                    {r.totalApp} / {r.totalSub}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    {r.accRate.toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Official Highlights from Executive Summary */}
      <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
          <Award className="w-4 h-4" />
          <span>Report Highlights (Official Review Findings)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-3">
          {REPORT_HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/70 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-slate-200">{h.name}</span>
                  <span className="font-mono text-emerald-400 font-bold text-[11px] bg-emerald-950/40 border border-emerald-800/40 px-1.5 py-0.5 rounded">
                    {h.stat}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
          <span>Center Distribution:</span>
          <span className="text-slate-200 font-medium">
            BARC (Bako), SARC (Sinana), ATARC (Adami Tulu), Bore, and Fedis lead in top researcher productivity.
          </span>
        </div>
      </div>
    </div>
  );
};
