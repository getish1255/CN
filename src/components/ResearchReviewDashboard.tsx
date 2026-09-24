import React, { useMemo, useState } from 'react';
import { CenterStat, DirectorateStat, ResearcherStat } from '../types/dashboard';
import { REPORT_HIGHLIGHTS } from '../data/oariData';
import { HorizontalBarChart } from './Charts/BarChart';
import {
  Award,
  ChevronDown,
  ChevronUp,
  Download,
  FileCheck,
  Search
} from 'lucide-react';

interface ResearchReviewDashboardProps {
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
  };
  directorates: DirectorateStat[];
  centers: CenterStat[];
  researchers: ResearcherStat[];
  onSelectResearcher: (researcher: ResearcherStat) => void;
  onOpenNewConceptNote: () => void;
  initialSection?: 'all' | 'directorates' | 'centers' | 'researchers';
}

export const ResearchReviewDashboard: React.FC<ResearchReviewDashboardProps> = ({
  oariStats,
  directorates,
  centers,
  researchers,
  onSelectResearcher,
  onOpenNewConceptNote,
  initialSection = 'all'
}) => {
  // Navigation section state
  const [activeSection, setActiveSection] = useState<'all' | 'directorates' | 'centers' | 'researchers'>(initialSection);

  // Sync if initialSection changes
  React.useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);
  
  // Centers filter: all vs >= 50 submissions
  const [centerFilter, setCenterFilter] = useState<'all' | 'ge50'>('all');

  // Researcher table filters & sort
  const [searchResearcher, setSearchResearcher] = useState('');
  const [selectedDirectorate, setSelectedDirectorate] = useState('all');
  const [selectedCenter, setSelectedCenter] = useState('all');
  const [sortField, setSortField] = useState<'no' | 'totalSub' | 'fullyAcc' | 'totalApp' | 'accRate'>('no');
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  // Directorate chart data
  const directorateChartItems = useMemo(() => {
    return [...directorates]
      .sort((a, b) => b.submitted - a.submitted)
      .map((d) => ({
        id: d.id,
        label: d.name,
        total: d.submitted,
        approved: d.accepted + d.acceptedWithMod + d.condAccepted,
        rate: d.acceptanceRate,
        category: `${d.accepted} direct`
      }));
  }, [directorates]);

  // Center chart data (filtered for >= 50 or all)
  const centerChartItems = useMemo(() => {
    let list = [...centers];
    if (centerFilter === 'ge50') {
      list = list.filter((c) => c.submitted >= 50);
    }
    return list
      .sort((a, b) => b.submitted - a.submitted)
      .map((c) => ({
        id: c.id,
        label: c.name,
        total: c.submitted,
        approved: c.accepted + c.acceptedWithMod + c.condAccepted,
        rate: c.acceptanceRate,
        category: `${c.acceptanceRate.toFixed(1)}% acc`
      }));
  }, [centers, centerFilter]);

  // Filter and sort researchers
  const filteredResearchers = useMemo(() => {
    return researchers
      .filter((r) => {
        const matchesName = r.name.toLowerCase().includes(searchResearcher.toLowerCase());
        const matchesDir = selectedDirectorate === 'all' || r.directorate.toLowerCase() === selectedDirectorate.toLowerCase();
        const matchesCenter = selectedCenter === 'all' || r.center.toLowerCase() === selectedCenter.toLowerCase();
        return matchesName && matchesDir && matchesCenter;
      })
      .sort((a, b) => {
        const factor = sortAsc ? 1 : -1;
        if (sortField === 'no') return (a.no - b.no) * factor;
        if (sortField === 'totalSub') return (a.totalSub - b.totalSub) * factor;
        if (sortField === 'fullyAcc') return (a.fullyAcc - b.fullyAcc) * factor;
        if (sortField === 'totalApp') return (a.totalApp - b.totalApp) * factor;
        if (sortField === 'accRate') return (a.accRate - b.accRate) * factor;
        return 0;
      });
  }, [researchers, searchResearcher, selectedDirectorate, selectedCenter, sortField, sortAsc]);

  const handleSort = (field: 'no' | 'totalSub' | 'fullyAcc' | 'totalApp' | 'accRate') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false); // default to descending for numbers
    }
  };

  // Export CSV helper
  const exportResearchersCSV = () => {
    const headers = ['No', 'Researcher / Initiator', 'Center', 'Directorate', 'Total Sub', 'Fully Acc', 'Cond Acc', 'Total App', 'Acc Rate %'];
    const rows = filteredResearchers.map((r) => [
      r.no,
      `"${r.name}"`,
      `"${r.center}"`,
      `"${r.directorate}"`,
      r.totalSub,
      r.fullyAcc,
      r.condAcc,
      r.totalApp,
      `${r.accRate}%`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `OARI_Researchers_Performance_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Unique centers and directorates for filter dropdowns
  const uniqueDirectorates = Array.from(new Set(researchers.map((r) => r.directorate))).sort();
  const uniqueCenters = Array.from(new Set(researchers.map((r) => r.center))).sort();

  return (
    <div className="space-y-8">
      {/* Official Report Header */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2.5 py-1 rounded-md mb-2">
              <span>OROMIA AGRICULTURAL RESEARCH INSTITUTE (OARI)</span>
              <span>·</span>
              <span>Official Decision Report</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Research Concept Note Review & Performance Audit
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Decision Summary Report, Review Cycle September 04–17, 2026. Synthesizing 1,734 proposals across 9 directorates and 20 research centers.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={exportResearchersCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onOpenNewConceptNote}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/20 transition-all whitespace-nowrap"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Record Proposal Decision</span>
            </button>
          </div>
        </div>

        {/* Quick section jumps */}
        <div className="flex items-center gap-1 mt-5 pt-4 border-t border-slate-800/80 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-3 py-1 rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'all' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Sections
          </button>
          <button
            onClick={() => setActiveSection('directorates')}
            className={`px-3 py-1 rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'directorates' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Directorate Performance (Table 1)
          </button>
          <button
            onClick={() => setActiveSection('centers')}
            className={`px-3 py-1 rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'centers' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Center Performance (Table 2)
          </button>
          <button
            onClick={() => setActiveSection('researchers')}
            className={`px-3 py-1 rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'researchers' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Researchers Performance (Table 3)
          </button>
        </div>
      </div>

      {/* 1. Executive Summary & Decision Category Metrics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-600/30 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">1</span>
            Executive Summary & Decision Breakdown
          </h2>
          <span className="text-xs text-slate-400 font-mono">1,734 Submissions</span>
        </div>

        {/* 4 Decision Categories Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-900/40">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Accepted (Direct)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
              {oariStats.directAcceptance.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-1">
              {oariStats.directAcceptancePercentage}% of total
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-blue-900/40">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Conditionally Accepted</span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <div className="text-2xl font-bold font-mono text-blue-400 tabular-nums">
              {oariStats.condAcceptance.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-1">
              {oariStats.condAcceptancePercentage}% of total
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/40">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Accepted w/ Modifications</span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </div>
            <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
              {oariStats.modAcceptance.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-1">
              {oariStats.modAcceptancePercentage}% of total
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/40">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Rejected / Pended / Merged</span>
              <span className="w-2 h-2 rounded-full bg-rose-500" />
            </div>
            <div className="text-2xl font-bold font-mono text-rose-400 tabular-nums">
              {oariStats.rejectedCount + oariStats.pendedCount + oariStats.mergedCount}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-1">
              {oariStats.rejectedPercentage}% (Rej: {oariStats.rejectedCount}, Pend: {oariStats.pendedCount}, Merg: {oariStats.mergedCount})
            </div>
          </div>
        </div>

        {/* Narrative Synthesis */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Overall, <strong className="text-white">1,253 concept notes (72.3%)</strong> were approved for further development, comprising 1,136 direct acceptances (65.5%), 33 acceptances with modifications (1.9%), and 84 conditional acceptances (4.8%). A total of 457 proposals (26.4%) were rejected, with the remaining 24 proposals pended (14) or merged (10). Crop Directorate registered the highest submission volume (452 concept notes) and the highest acceptance rate (94.2%).
          </p>
        </div>
      </div>

      {/* 2. Directorate Performance (Table 1) */}
      {(activeSection === 'all' || activeSection === 'directorates') && (
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-600/30 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">2</span>
                Table 1: Concept Note Acceptance by Directorate
              </h2>
              <p className="text-xs text-slate-400">
                Evaluation results across all 9 research directorates
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Visual Bar Chart: Exactly replicating Page 2 graph */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-semibold text-white mb-2">
                Concept Note Submissions & Acceptance by Directorate
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                Total submitted vs total accepted (including modifications & conditions)
              </p>
              <HorizontalBarChart
                items={directorateChartItems}
                maxTotal={460}
                totalLabel="Total Submitted"
                approvedLabel="Accepted"
              />
            </div>

            {/* Table 1 Data View */}
            <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900/60 border border-slate-800 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                    <th className="py-2.5 px-2.5">Directorate</th>
                    <th className="py-2.5 px-2 text-right">Submitted</th>
                    <th className="py-2.5 px-2 text-right">Accepted</th>
                    <th className="py-2.5 px-2 text-right">Acc w/ Mod</th>
                    <th className="py-2.5 px-2 text-right">Cond. Acc</th>
                    <th className="py-2.5 px-2 text-right">Rejected</th>
                    <th className="py-2.5 px-2.5 text-right">Acceptance Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  {directorates.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-2.5 px-2.5 font-sans font-medium text-slate-200">
                        {d.name}
                      </td>
                      <td className="py-2.5 px-2 text-right font-bold text-white tabular-nums">
                        {d.submitted}
                      </td>
                      <td className="py-2.5 px-2 text-right text-emerald-400 tabular-nums">
                        {d.accepted}
                      </td>
                      <td className="py-2.5 px-2 text-right text-amber-400 tabular-nums">
                        {d.acceptedWithMod}
                      </td>
                      <td className="py-2.5 px-2 text-right text-blue-400 tabular-nums">
                        {d.condAccepted}
                      </td>
                      <td className="py-2.5 px-2 text-right text-rose-400 tabular-nums">
                        {d.rejected}
                      </td>
                      <td className="py-2.5 px-2.5 text-right">
                        <span
                          className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                            d.acceptanceRate >= 80
                              ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40'
                              : d.acceptanceRate >= 60
                              ? 'text-blue-400 bg-blue-950/60 border border-blue-800/40'
                              : 'text-amber-400 bg-amber-950/60 border border-amber-800/40'
                          }`}
                        >
                          {d.acceptanceRate.toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                  {/* Grand Total Row */}
                  <tr className="border-t-2 border-slate-700 bg-slate-950/60 font-bold text-white">
                    <td className="py-3 px-2.5 font-sans">Grand Total</td>
                    <td className="py-3 px-2 text-right tabular-nums">{oariStats.totalSubmissions}</td>
                    <td className="py-3 px-2 text-right text-emerald-400 tabular-nums">{oariStats.directAcceptance}</td>
                    <td className="py-3 px-2 text-right text-amber-400 tabular-nums">{oariStats.modAcceptance}</td>
                    <td className="py-3 px-2 text-right text-blue-400 tabular-nums">{oariStats.condAcceptance}</td>
                    <td className="py-3 px-2 text-right text-rose-400 tabular-nums">{oariStats.rejectedCount}</td>
                    <td className="py-3 px-2.5 text-right text-emerald-400 tabular-nums">{oariStats.approvalPercentage}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. Research Center Performance (Table 2) */}
      {(activeSection === 'all' || activeSection === 'centers') && (
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-600/30 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">3</span>
                Table 2: Research Center Performance
              </h2>
              <p className="text-xs text-slate-400">
                Evaluation results across all 20 research centers and operational stations
              </p>
            </div>

            {/* Filter Toggle: All vs >= 50 Submissions */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs self-start sm:self-center">
              <button
                onClick={() => setCenterFilter('all')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  centerFilter === 'all' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All 20 Centers
              </button>
              <button
                onClick={() => setCenterFilter('ge50')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  centerFilter === 'ge50' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Centers with ≥ 50 Submissions
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Center Bar Chart (matching page 3 graph) */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-semibold text-white mb-1">
                Concept Notes Submission & Acceptance
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                {centerFilter === 'ge50'
                  ? 'Centers with ≥ 50 Submissions (Matching Report Figure)'
                  : 'All Research Centers Rank Order'}
              </p>
              <HorizontalBarChart
                items={centerChartItems}
                maxTotal={260}
                totalLabel="Total Submitted"
                approvedLabel="Accepted (Total Approved)"
              />
            </div>

            {/* Table 2 Center Data Table */}
            <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900/60 border border-slate-800 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                    <th className="py-2.5 px-2.5">Research Center</th>
                    <th className="py-2.5 px-2 text-right">Submitted</th>
                    <th className="py-2.5 px-2 text-right">Accepted</th>
                    <th className="py-2.5 px-2 text-right">Acc w/ Mod</th>
                    <th className="py-2.5 px-2 text-right">Cond. Acc</th>
                    <th className="py-2.5 px-2 text-right">Rejected</th>
                    <th className="py-2.5 px-2.5 text-right">Acceptance Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  {centers
                    .filter((c) => (centerFilter === 'ge50' ? c.submitted >= 50 : true))
                    .map((c) => (
                      <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-2 px-2.5 font-sans font-medium text-slate-200">
                          {c.name}
                        </td>
                        <td className="py-2 px-2 text-right font-bold text-white tabular-nums">
                          {c.submitted}
                        </td>
                        <td className="py-2 px-2 text-right text-emerald-400 tabular-nums">
                          {c.accepted}
                        </td>
                        <td className="py-2 px-2 text-right text-amber-400 tabular-nums">
                          {c.acceptedWithMod}
                        </td>
                        <td className="py-2 px-2 text-right text-blue-400 tabular-nums">
                          {c.condAccepted}
                        </td>
                        <td className="py-2 px-2 text-right text-rose-400 tabular-nums">
                          {c.rejected}
                        </td>
                        <td className="py-2 px-2.5 text-right">
                          <span
                            className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                              c.acceptanceRate >= 80
                                ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40'
                                : c.acceptanceRate >= 65
                                ? 'text-blue-400 bg-blue-950/60 border border-blue-800/40'
                                : 'text-amber-400 bg-amber-950/60 border border-amber-800/40'
                            }`}
                          >
                            {c.acceptanceRate.toFixed(1)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 4. Researchers Performance (Table 3 - Pages 4 & 5) */}
      {(activeSection === 'all' || activeSection === 'researchers') && (
        <div className="space-y-4 pt-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-600/30 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">4</span>
                Table 3: Researchers Performance (50 Evaluated Initiators)
              </h2>
              <p className="text-xs text-slate-400">
                Individual productivity, direct acceptance count, and approval rates
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search researcher..."
                  value={searchResearcher}
                  onChange={(e) => setSearchResearcher(e.target.value)}
                  className="pl-8 pr-3 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 w-44"
                />
              </div>

              <select
                value={selectedDirectorate}
                onChange={(e) => setSelectedDirectorate(e.target.value)}
                className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Directorates</option>
                {uniqueDirectorates.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              <select
                value={selectedCenter}
                onChange={(e) => setSelectedCenter(e.target.value)}
                className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Centers</option>
                {uniqueCenters.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Full Researchers Table */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                  <th
                    className="py-2.5 px-2 cursor-pointer hover:text-white"
                    onClick={() => handleSort('no')}
                  >
                    <div className="flex items-center gap-1">
                      <span>No</span>
                      {sortField === 'no' && (sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                    </div>
                  </th>
                  <th className="py-2.5 px-3">Researcher / Initiator</th>
                  <th className="py-2.5 px-3">Center</th>
                  <th className="py-2.5 px-3">Directorate</th>
                  <th
                    className="py-2.5 px-2 text-right cursor-pointer hover:text-white"
                    onClick={() => handleSort('totalSub')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>Total Sub</span>
                      {sortField === 'totalSub' && (sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                    </div>
                  </th>
                  <th
                    className="py-2.5 px-2 text-right cursor-pointer hover:text-white"
                    onClick={() => handleSort('fullyAcc')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>Fully Acc</span>
                      {sortField === 'fullyAcc' && (sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                    </div>
                  </th>
                  <th className="py-2.5 px-2 text-right">Cond. Acc</th>
                  <th
                    className="py-2.5 px-2 text-right cursor-pointer hover:text-white"
                    onClick={() => handleSort('totalApp')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>Total App</span>
                      {sortField === 'totalApp' && (sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                    </div>
                  </th>
                  <th
                    className="py-2.5 px-3 text-right cursor-pointer hover:text-white"
                    onClick={() => handleSort('accRate')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>Acc. Rate</span>
                      {sortField === 'accRate' && (sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                {filteredResearchers.map((r) => (
                  <tr
                    key={r.no}
                    onClick={() => onSelectResearcher(r)}
                    className="hover:bg-slate-800/50 transition-colors cursor-pointer group"
                  >
                    <td className="py-2 px-2 text-slate-400 font-bold">{r.no}</td>
                    <td className="py-2 px-3 font-sans font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                      {r.name}
                    </td>
                    <td className="py-2 px-3 font-sans text-slate-300">{r.center}</td>
                    <td className="py-2 px-3 font-sans text-slate-400">{r.directorate}</td>
                    <td className="py-2 px-2 text-right font-bold text-white tabular-nums">
                      {r.totalSub}
                    </td>
                    <td className="py-2 px-2 text-right text-emerald-400 tabular-nums">
                      {r.fullyAcc}
                    </td>
                    <td className="py-2 px-2 text-right text-blue-400 tabular-nums">
                      {r.condAcc}
                    </td>
                    <td className="py-2 px-2 text-right font-bold text-slate-200 tabular-nums">
                      {r.totalApp}
                    </td>
                    <td className="py-2 px-3 text-right">
                      <span
                        className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                          r.accRate === 100
                            ? 'text-emerald-300 bg-emerald-950/80 border border-emerald-700/50'
                            : r.accRate >= 80
                            ? 'text-emerald-400 bg-emerald-950/50 border border-emerald-800/40'
                            : r.accRate >= 60
                            ? 'text-blue-400 bg-blue-950/50 border border-blue-800/40'
                            : 'text-amber-400 bg-amber-950/50 border border-amber-800/40'
                        }`}
                      >
                        {r.accRate.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredResearchers.length === 0 && (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-slate-500 font-sans">
                      No researchers found matching the specified filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. Key Highlights Section (Matching Page 5) */}
      <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
          <Award className="w-4 h-4" />
          <span>Research Review Highlights</span>
        </div>
        <p className="text-xs text-slate-400 mb-4">
          Distinguished researchers with high submission volume and exemplary acceptance efficiency
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {REPORT_HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-200">{h.name}</span>
                  <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                    {h.stat}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
          <span>Center Productivity Leadership:</span>
          <span className="text-slate-200 font-medium">BARC (Bako), SARC (Sinana), ATARC (Adami Tulu), Bore, and Fedis</span>
        </div>
      </div>
    </div>
  );
};
