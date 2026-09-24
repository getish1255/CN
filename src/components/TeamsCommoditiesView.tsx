import React, { useMemo, useState } from 'react';
import { TeamStat } from '../types/dashboard';
import { HorizontalBarChart } from './Charts/BarChart';
import {
  Microscope,
  Layers,
  Search,
  Filter,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  Clock,
  ArrowUpDown,
  Building2,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface TeamsCommoditiesViewProps {
  teams: TeamStat[];
  onSelectTeam?: (team: TeamStat) => void;
}

export const TeamsCommoditiesView: React.FC<TeamsCommoditiesViewProps> = ({
  teams,
  onSelectTeam
}) => {
  const [searchTeam, setSearchTeam] = useState('');
  const [selectedDirectorate, setSelectedDirectorate] = useState('all');
  const [sortBy, setSortBy] = useState<'submitted' | 'rate' | 'accepted' | 'rejected' | 'name'>('submitted');

  const uniqueDirectorates = useMemo(() => {
    return Array.from(new Set(teams.map((t) => t.directorate))).sort();
  }, [teams]);

  const filteredTeams = useMemo(() => {
    return teams
      .filter((t) => {
        const matchesSearch = t.name.toLowerCase().includes(searchTeam.toLowerCase());
        const matchesDir =
          selectedDirectorate === 'all' || t.directorate.toLowerCase() === selectedDirectorate.toLowerCase();
        return matchesSearch && matchesDir;
      })
      .sort((a, b) => {
        if (sortBy === 'submitted') return b.submitted - a.submitted;
        if (sortBy === 'rate') return b.acceptanceRate - a.acceptanceRate;
        if (sortBy === 'accepted') {
          const appA = a.accepted + a.acceptedWithMod + a.condAccepted;
          const appB = b.accepted + b.acceptedWithMod + b.condAccepted;
          return appB - appA;
        }
        if (sortBy === 'rejected') return b.rejected - a.rejected;
        return a.name.localeCompare(b.name);
      });
  }, [teams, searchTeam, selectedDirectorate, sortBy]);

  const barChartItems = useMemo(() => {
    return filteredTeams.slice(0, 15).map((t) => ({
      id: t.name,
      label: t.name,
      total: t.submitted,
      approved: t.accepted + t.acceptedWithMod + t.condAccepted,
      rate: t.acceptanceRate,
      category: t.directorate
    }));
  }, [filteredTeams]);

  // Overall calculations across all teams recalculated from Screened CNs
  const totalSubmissions = teams.reduce((acc, t) => acc + t.submitted, 0);
  const totalDirect = teams.reduce((acc, t) => acc + t.accepted, 0);
  const totalMod = teams.reduce((acc, t) => acc + t.acceptedWithMod, 0);
  const totalCond = teams.reduce((acc, t) => acc + t.condAccepted, 0);
  const totalRejected = teams.reduce((acc, t) => acc + t.rejected, 0);
  const totalApproved = totalDirect + totalMod + totalCond;
  const averageRate = totalSubmissions > 0 ? (totalApproved / totalSubmissions) * 100 : 0;

  const topVolumeTeam = [...teams].sort((a, b) => b.submitted - a.submitted)[0];
  const topRateTeam = [...teams].filter((t) => t.submitted >= 20).sort((a, b) => b.acceptanceRate - a.acceptanceRate)[0];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1.5">
            <Microscope className="w-4 h-4" />
            <span className="font-semibold uppercase tracking-wide">Thematic Disciplines & Commodity Divisions</span>
            <span>·</span>
            <span>{teams.length} Specialized Research Teams</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Research Team & Commodity Performance Matrix
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
            Recalculated directly from the <strong>1,734 evaluated concept notes</strong> in the official screening file. Provides accurate submission counts, direct approvals, technical modifications, conditional acceptances, and rejection benchmarks per specialized team.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs bg-slate-950/80 px-4 py-3 rounded-lg border border-slate-800 self-start md:self-center shrink-0">
          <div>
            <span className="text-slate-400 block text-[10px]">Total Evaluated</span>
            <span className="text-white font-bold text-sm tabular-nums">{totalSubmissions.toLocaleString()} CNs</span>
          </div>
          <div className="h-7 w-px bg-slate-800 mx-1" />
          <div>
            <span className="text-slate-400 block text-[10px]">Total Approved</span>
            <span className="text-emerald-400 font-bold text-sm tabular-nums">{totalApproved.toLocaleString()} ({averageRate.toFixed(1)}%)</span>
          </div>
          <div className="h-7 w-px bg-slate-800 mx-1" />
          <div>
            <span className="text-slate-400 block text-[10px]">Active Teams</span>
            <span className="text-blue-400 font-bold text-sm tabular-nums">{teams.length}</span>
          </div>
        </div>
      </div>

      {/* Recalculated Institutional Scorecard for Teams */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Total Submissions</span>
          <div className="text-xl font-bold font-mono text-white tabular-nums mt-1">{totalSubmissions.toLocaleString()}</div>
          <span className="text-[11px] text-slate-400 mt-0.5 block">100% Screened</span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <span className="text-[10px] text-emerald-400 uppercase font-mono tracking-wider block">Direct Accepted</span>
          <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums mt-1">{totalDirect.toLocaleString()}</div>
          <span className="text-[11px] text-emerald-400/80 mt-0.5 block">{((totalDirect / totalSubmissions) * 100).toFixed(1)}% Direct</span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <span className="text-[10px] text-amber-400 uppercase font-mono tracking-wider block">With Modification</span>
          <div className="text-xl font-bold font-mono text-amber-400 tabular-nums mt-1">{totalMod}</div>
          <span className="text-[11px] text-amber-400/80 mt-0.5 block">Livestock & Coffee</span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <span className="text-[10px] text-blue-400 uppercase font-mono tracking-wider block">Conditional Acc.</span>
          <div className="text-xl font-bold font-mono text-blue-400 tabular-nums mt-1">{totalCond}</div>
          <span className="text-[11px] text-blue-400/80 mt-0.5 block">NR, Eng, SEAE</span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <span className="text-[10px] text-rose-400 uppercase font-mono tracking-wider block">Rejected / Pended</span>
          <div className="text-xl font-bold font-mono text-rose-400 tabular-nums mt-1">{totalRejected.toLocaleString()}</div>
          <span className="text-[11px] text-rose-400/80 mt-0.5 block">{((totalRejected / totalSubmissions) * 100).toFixed(1)}% Rejection</span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <span className="text-[10px] text-purple-400 uppercase font-mono tracking-wider block">Approval Benchmark</span>
          <div className="text-xl font-bold font-mono text-purple-400 tabular-nums mt-1">{averageRate.toFixed(1)}%</div>
          <span className="text-[11px] text-purple-400/80 mt-0.5 block">&gt;70% Standard</span>
        </div>
      </div>

      {/* Visual Chart & Full Team Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 5 Cols: Horizontal Volume & Acceptance Comparison */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">Top Research Teams by Volume</h2>
              <p className="text-xs text-slate-400">Proposals submitted vs approved per discipline</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
              Top 15
            </span>
          </div>

          <HorizontalBarChart
            items={barChartItems}
            maxTotal={200}
            totalLabel="Submitted"
            approvedLabel="Approved"
          />

          {/* Quick Disciplinary Insights */}
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">Highest Volume Discipline:</span>
              <span className="font-semibold text-white font-mono">{topVolumeTeam?.name} ({topVolumeTeam?.submitted} CNs)</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">High-Volume Quality Leader:</span>
              <span className="font-semibold text-emerald-400 font-mono">{topRateTeam?.name} ({topRateTeam?.acceptanceRate.toFixed(1)}%)</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">Total Commodity Divisions:</span>
              <span className="font-semibold text-blue-400 font-mono">{teams.length} Teams across 9 Directorates</span>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Full Team Directory Table */}
        <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-white">All Recalculated Research Teams</h2>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {filteredTeams.length} of {teams.length}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Click any team to filter & view its 1,734 screened concept notes</p>
            </div>

            {/* Filters and Sort Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search team..."
                  value={searchTeam}
                  onChange={(e) => setSearchTeam(e.target.value)}
                  className="pl-8 pr-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 w-32 sm:w-36"
                />
              </div>

              <select
                value={selectedDirectorate}
                onChange={(e) => setSelectedDirectorate(e.target.value)}
                className="px-2 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Directorates</option>
                {uniqueDirectorates.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-200 focus:outline-none focus:border-blue-500 font-mono text-[11px]"
              >
                <option value="submitted">Sort: Submissions</option>
                <option value="rate">Sort: Acceptance Rate</option>
                <option value="accepted">Sort: Approved Count</option>
                <option value="rejected">Sort: Rejections</option>
                <option value="name">Sort: Name (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto max-h-[520px] overflow-y-auto rounded-lg border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="sticky top-0 bg-slate-900 z-10 border-b border-slate-800 shadow-sm">
                <tr className="text-slate-400 font-mono text-[11px]">
                  <th className="py-2.5 px-3">Team / Commodity</th>
                  <th className="py-2.5 px-3">Directorate</th>
                  <th className="py-2.5 px-2 text-center">Centers</th>
                  <th className="py-2.5 px-2 text-right">Sub</th>
                  <th className="py-2.5 px-2 text-right">Acc</th>
                  <th className="py-2.5 px-2 text-right">Mod</th>
                  <th className="py-2.5 px-2 text-right">Cond</th>
                  <th className="py-2.5 px-2 text-right">Rej</th>
                  <th className="py-2.5 px-3 text-right">Acceptance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                {filteredTeams.map((team, idx) => (
                  <tr
                    key={idx}
                    onClick={() => onSelectTeam?.(team)}
                    className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                    title={`Click to inspect all ${team.submitted} concept notes for ${team.name}`}
                  >
                    <td className="py-2.5 px-3 font-sans font-medium text-slate-200 group-hover:text-blue-400 flex items-center justify-between gap-2">
                      <span>{team.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </td>
                    <td className="py-2.5 px-3 font-sans text-slate-400">
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800/80 border border-slate-700/50 text-slate-300">
                        {team.directorate}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-center text-slate-400">
                      {team.centersCount || 1}
                    </td>
                    <td className="py-2.5 px-2 text-right font-bold text-white tabular-nums">
                      {team.submitted}
                    </td>
                    <td className="py-2.5 px-2 text-right text-emerald-400 tabular-nums">
                      {team.accepted}
                    </td>
                    <td className="py-2.5 px-2 text-right text-amber-400 tabular-nums">
                      {team.acceptedWithMod > 0 ? team.acceptedWithMod : '—'}
                    </td>
                    <td className="py-2.5 px-2 text-right text-blue-400 tabular-nums">
                      {team.condAccepted > 0 ? team.condAccepted : '—'}
                    </td>
                    <td className="py-2.5 px-2 text-right text-rose-400 tabular-nums">
                      {team.rejected}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <span
                        className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                          team.acceptanceRate >= 80
                            ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40'
                            : team.acceptanceRate >= 60
                            ? 'text-blue-400 bg-blue-950/60 border border-blue-800/40'
                            : 'text-amber-400 bg-amber-950/60 border border-amber-800/40'
                        }`}
                      >
                        {team.acceptanceRate.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-mono">
            <span>Showing {filteredTeams.length} teams</span>
            <span>Total: 1,734 CNs evaluated across {teams.length} divisions</span>
          </div>
        </div>
      </div>
    </div>
  );
};
