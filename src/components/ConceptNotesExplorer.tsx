import React, { useMemo, useState } from 'react';
import { ConceptNote, DecisionType } from '../types/dashboard';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  MessageSquare,
  Search,
  SlidersHorizontal,
  XCircle,
  AlertCircle,
  Clock,
  GitMerge,
  Building2,
  ExternalLink
} from 'lucide-react';

interface ConceptNotesExplorerProps {
  conceptNotes: ConceptNote[];
  onSelectConceptNote: (note: ConceptNote) => void;
  onUpdateDecision: (no: number, newDecision: DecisionType, comments?: string) => void;
  initialTeam?: string;
}

export const ConceptNotesExplorer: React.FC<ConceptNotesExplorerProps> = ({
  conceptNotes,
  onSelectConceptNote,
  initialTeam
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDirectorate, setSelectedDirectorate] = useState('all');
  const [selectedCenter, setSelectedCenter] = useState('all');
  const [selectedTeam, setSelectedTeam] = useState(initialTeam || 'all');
  const [selectedDecision, setSelectedDecision] = useState<string>('all');
  const [onlyWithComments, setOnlyWithComments] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);

  React.useEffect(() => {
    if (initialTeam) {
      setSelectedTeam(initialTeam);
      setCurrentPage(1);
    }
  }, [initialTeam]);

  // Extract unique filter items
  const uniqueDirectorates = useMemo(() => {
    return Array.from(new Set(conceptNotes.map((n) => n.directorate))).sort();
  }, [conceptNotes]);

  const uniqueCenters = useMemo(() => {
    return Array.from(new Set(conceptNotes.map((n) => n.center))).sort();
  }, [conceptNotes]);

  const uniqueTeams = useMemo(() => {
    return Array.from(new Set(conceptNotes.map((n) => n.team))).sort();
  }, [conceptNotes]);

  // Filtered dataset
  const filteredNotes = useMemo(() => {
    return conceptNotes.filter((note) => {
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        !term ||
        note.no.toString().includes(term) ||
        note.title.toLowerCase().includes(term) ||
        note.initiators.toLowerCase().includes(term) ||
        (note.comments && note.comments.toLowerCase().includes(term));

      const matchesDirectorate =
        selectedDirectorate === 'all' || note.directorate.toLowerCase() === selectedDirectorate.toLowerCase();
      const matchesCenter =
        selectedCenter === 'all' || note.center.toLowerCase() === selectedCenter.toLowerCase();
      const matchesTeam =
        selectedTeam === 'all' || note.team.toLowerCase() === selectedTeam.toLowerCase();
      const matchesDecision =
        selectedDecision === 'all' || note.decision.toLowerCase() === selectedDecision.toLowerCase();
      const matchesComments = !onlyWithComments || (note.comments && note.comments.trim().length > 0);

      return (
        matchesSearch &&
        matchesDirectorate &&
        matchesCenter &&
        matchesTeam &&
        matchesDecision &&
        matchesComments
      );
    });
  }, [
    conceptNotes,
    searchTerm,
    selectedDirectorate,
    selectedCenter,
    selectedTeam,
    selectedDecision,
    onlyWithComments
  ]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredNotes.length / pageSize));
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * pageSize;
  const pageItems = filteredNotes.slice(startIndex, startIndex + pageSize);

  // Decision metrics in current filtered view
  const summaryStats = useMemo(() => {
    let accepted = 0;
    let mod = 0;
    let cond = 0;
    let rejected = 0;
    let pended = 0;
    let merged = 0;

    for (const note of filteredNotes) {
      if (note.decision === 'Accepted') accepted++;
      else if (note.decision === 'Accepted with modification') mod++;
      else if (note.decision === 'Conditionally Accepted') cond++;
      else if (note.decision === 'Rejected') rejected++;
      else if (note.decision === 'Pended') pended++;
      else if (note.decision === 'Merged') merged++;
    }

    const totalApproved = accepted + mod + cond;
    const approvalRate = filteredNotes.length > 0 ? (totalApproved / filteredNotes.length) * 100 : 0;

    return { accepted, mod, cond, rejected, pended, merged, totalApproved, approvalRate };
  }, [filteredNotes]);

  // Export filtered to CSV
  const handleExportCSV = () => {
    const headers = ['CN No', 'Center', 'Directorate', 'Team', 'Title', 'Initiator(s)', 'Decision', 'Reviewer Comments'];
    const rows = filteredNotes.map((n) => [
      n.no,
      `"${n.center}"`,
      `"${n.directorate}"`,
      `"${n.team}"`,
      `"${n.title.replace(/"/g, '""')}"`,
      `"${n.initiators.replace(/"/g, '""')}"`,
      `"${n.decision}"`,
      `"${(n.comments || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `OARI_Concept_Notes_Screening_Registry.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDirectorate('all');
    setSelectedCenter('all');
    setSelectedTeam('all');
    setSelectedDecision('all');
    setOnlyWithComments(false);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-5">
      {/* Header Bar */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Master Research Concept Notes Registry</span>
            <span>·</span>
            <span>2020 EC Screening Result</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            1,734 Research Concept Notes Database
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Comprehensive institutional registry with proposal titles, centers, directorates, research teams, initiators, decisions, and reviewer comments.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV ({filteredNotes.length})</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar Card */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {/* Search Box */}
          <div className="relative lg:col-span-2">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, initiator, CN number, or comment..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Directorate filter */}
          <div>
            <select
              value={selectedDirectorate}
              onChange={(e) => {
                setSelectedDirectorate(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Directorates ({uniqueDirectorates.length})</option>
              {uniqueDirectorates.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Center filter */}
          <div>
            <select
              value={selectedCenter}
              onChange={(e) => {
                setSelectedCenter(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Centers ({uniqueCenters.length})</option>
              {uniqueCenters.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Decision filter */}
          <div>
            <select
              value={selectedDecision}
              onChange={(e) => {
                setSelectedDecision(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Decisions</option>
              <option value="Accepted">Accepted (Direct)</option>
              <option value="Accepted with modification">Accepted w/ Modification</option>
              <option value="Conditionally Accepted">Conditionally Accepted</option>
              <option value="Rejected">Rejected</option>
              <option value="Pended">Pended</option>
              <option value="Merged">Merged</option>
            </select>
          </div>
        </div>

        {/* Second Row: Team filter & Comment Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/60 text-xs">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="w-56">
              <select
                value={selectedTeam}
                onChange={(e) => {
                  setSelectedTeam(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Research Teams ({uniqueTeams.length})</option>
                {uniqueTeams.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-2 text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyWithComments}
                onChange={(e) => {
                  setOnlyWithComments(e.target.checked);
                  setCurrentPage(1);
                }}
                className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0 w-3.5 h-3.5"
              />
              <span>Has Reviewer Directives / Comments</span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            {(searchTerm ||
              selectedDirectorate !== 'all' ||
              selectedCenter !== 'all' ||
              selectedTeam !== 'all' ||
              selectedDecision !== 'all' ||
              onlyWithComments) && (
              <button
                onClick={resetFilters}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium underline underline-offset-2"
              >
                Reset All Filters
              </button>
            )}
            <span className="font-mono text-slate-400">
              Showing <strong className="text-white">{filteredNotes.length.toLocaleString()}</strong> of {conceptNotes.length.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Filtered KPI Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 text-xs">
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Direct Accepted:</span>
          <span className="font-mono font-bold text-emerald-400 tabular-nums">
            {summaryStats.accepted}
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Accepted w/ Mod:</span>
          <span className="font-mono font-bold text-amber-400 tabular-nums">
            {summaryStats.mod}
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Conditionally Acc:</span>
          <span className="font-mono font-bold text-blue-400 tabular-nums">
            {summaryStats.cond}
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Rejected:</span>
          <span className="font-mono font-bold text-rose-400 tabular-nums">
            {summaryStats.rejected}
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Pended / Merged:</span>
          <span className="font-mono font-bold text-purple-400 tabular-nums">
            {summaryStats.pended + summaryStats.merged}
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Approval Rate:</span>
          <span className="font-mono font-bold text-emerald-300 tabular-nums">
            {summaryStats.approvalRate.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Main Concept Notes Table */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
              <th className="py-2.5 px-3 w-16">No</th>
              <th className="py-2.5 px-3">Center</th>
              <th className="py-2.5 px-3">Directorate & Team</th>
              <th className="py-2.5 px-3 min-w-[340px]">Proposal Title</th>
              <th className="py-2.5 px-3 min-w-[170px]">Initiator(s)</th>
              <th className="py-2.5 px-3 text-right">Decision</th>
              <th className="py-2.5 px-3 min-w-[200px]">Reviewer Directives / Comments</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs font-sans">
            {pageItems.map((note) => {
              const isDirect = note.decision === 'Accepted';
              const isMod = note.decision === 'Accepted with modification';
              const isCond = note.decision === 'Conditionally Accepted';
              const isRej = note.decision === 'Rejected';
              const isPended = note.decision === 'Pended';
              const isMerged = note.decision === 'Merged';

              return (
                <tr
                  key={note.no}
                  onClick={() => onSelectConceptNote(note)}
                  className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-3 font-mono font-bold text-slate-400 group-hover:text-blue-400">
                    #{note.no}
                  </td>
                  <td className="py-3 px-3 font-medium text-slate-200 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]">
                      {note.center}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-semibold text-slate-200">{note.directorate}</div>
                    <div className="text-[11px] text-blue-400 font-mono">{note.team}</div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-medium text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                      {note.title}
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-300 font-medium">
                    <div className="line-clamp-2">{note.initiators}</div>
                  </td>
                  <td className="py-3 px-3 text-right whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                        isDirect
                          ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50'
                          : isMod
                          ? 'text-amber-400 bg-amber-950/60 border-amber-800/50'
                          : isCond
                          ? 'text-blue-400 bg-blue-950/60 border-blue-800/50'
                          : isRej
                          ? 'text-rose-400 bg-rose-950/60 border-rose-800/50'
                          : isPended
                          ? 'text-purple-400 bg-purple-950/60 border-purple-800/50'
                          : 'text-indigo-400 bg-indigo-950/60 border-indigo-800/50'
                      }`}
                    >
                      {isDirect && <CheckCircle2 className="w-3 h-3" />}
                      {isMod && <AlertCircle className="w-3 h-3" />}
                      {isCond && <Clock className="w-3 h-3" />}
                      {isRej && <XCircle className="w-3 h-3" />}
                      {isMerged && <GitMerge className="w-3 h-3" />}
                      {note.decision}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[11px] text-slate-400">
                    {note.comments ? (
                      <div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-slate-800/80 text-slate-300">
                        <MessageSquare className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{note.comments}</span>
                      </div>
                    ) : (
                      <span className="text-slate-600 font-mono text-[10px]">No comment recorded</span>
                    )}
                  </td>
                </tr>
              );
            })}
            {filteredNotes.length === 0 && (
              <tr>
                <td colSpan={7} className="py-12 text-center text-slate-500">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <BookOpen className="w-8 h-8 text-slate-700" />
                    <span>No concept notes match your search filters.</span>
                    <button
                      onClick={resetFilters}
                      className="text-xs text-blue-400 hover:underline mt-1"
                    >
                      Reset filters
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Rows per page:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200 focus:outline-none"
            >
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>
              Showing {filteredNotes.length === 0 ? 0 : startIndex + 1}–
              {Math.min(startIndex + pageSize, filteredNotes.length)} of {filteredNotes.length.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto font-mono">
            <button
              disabled={validPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 bg-slate-950 border border-slate-800 rounded text-slate-300">
              Page {validPage} of {totalPages}
            </span>
            <button
              disabled={validPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
