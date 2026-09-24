import React, { useState } from 'react';
import { ConceptNote, DecisionType, ReviewAuditLog } from '../types/dashboard';
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock,
  FileCheck,
  GitMerge,
  MessageSquare,
  Microscope,
  Pause,
  Play,
  Radio,
  Search,
  Send,
  Sparkles,
  XCircle
} from 'lucide-react';

interface DecisionEvaluatorProps {
  conceptNotes: ConceptNote[];
  auditLogs: ReviewAuditLog[];
  isLive: boolean;
  onToggleLive: () => void;
  speed: 1 | 2 | 5;
  onSetSpeed: (speed: 1 | 2 | 5) => void;
  onUpdateDecision: (no: number, newDecision: DecisionType, comments?: string, evaluator?: string) => void;
  onSelectConceptNote: (note: ConceptNote) => void;
}

export const DecisionEvaluator: React.FC<DecisionEvaluatorProps> = ({
  conceptNotes,
  auditLogs,
  isLive,
  onToggleLive,
  speed,
  onSetSpeed,
  onUpdateDecision,
  onSelectConceptNote
}) => {
  const [selectedNoteNo, setSelectedNoteNo] = useState<number>(1);
  const [decisionInput, setDecisionInput] = useState<DecisionType>('Accepted');
  const [commentsInput, setCommentsInput] = useState<string>('');
  const [evaluatorName, setEvaluatorName] = useState<string>('OARI Directorate Review Panel');
  const [searchFilter, setSearchFilter] = useState('');

  const currentNote = conceptNotes.find((n) => n.no === selectedNoteNo) || conceptNotes[0];

  const handleSelectNote = (note: ConceptNote) => {
    setSelectedNoteNo(note.no);
    setDecisionInput(note.decision);
    setCommentsInput(note.comments || '');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentNote) return;
    onUpdateDecision(currentNote.no, decisionInput, commentsInput, evaluatorName);
  };

  const filteredQuickList = conceptNotes
    .filter((n) => {
      const term = searchFilter.toLowerCase();
      return (
        !term ||
        n.no.toString().includes(term) ||
        n.title.toLowerCase().includes(term) ||
        n.initiators.toLowerCase().includes(term) ||
        n.center.toLowerCase().includes(term)
      );
    })
    .slice(0, 12);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Institutional Review Panel Console</span>
            <span>·</span>
            <span>Cycle 2020 EC</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Concept Note Screening & Review Session
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Evaluate submitted research concept notes, assign formal decisions, add methodological comments, and stream real-time audit updates.
          </p>
        </div>

        {/* Live Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
            <span className="text-[11px] text-slate-400 px-2 font-mono">PACE:</span>
            {[1, 2, 5].map((s) => (
              <button
                key={s}
                onClick={() => onSetSpeed(s as 1 | 2 | 5)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  speed === s ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          <button
            onClick={onToggleLive}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
              isLive
                ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800 hover:bg-emerald-900/40'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            {isLive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isLive ? 'SESSION ACTIVE' : 'SESSION PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Main Evaluator Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 4 Cols: Quick Proposal Selector */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Select Concept Note</h2>
            <span className="text-xs font-mono text-slate-400">1–1,734</span>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by CN No, title, center..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
            {filteredQuickList.map((note) => {
              const isSelected = note.no === currentNote?.no;
              return (
                <div
                  key={note.no}
                  onClick={() => handleSelectNote(note)}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/60 border-blue-500/80 shadow-md'
                      : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono font-bold text-blue-400">CN #{note.no}</span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-slate-800 text-slate-300">
                      {note.center}
                    </span>
                  </div>
                  <div className="text-xs text-slate-200 font-medium line-clamp-1">{note.title}</div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>{note.team}</span>
                    <span className="text-slate-300">{note.decision}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 8 Cols: Active Proposal Review & Decision Editor Form */}
        <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          {currentNote ? (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                    <span>CN #{currentNote.no}</span>
                    <span>·</span>
                    <span>{currentNote.directorate} Directorate</span>
                    <span>·</span>
                    <span>{currentNote.team} Team</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {currentNote.title}
                  </h3>
                </div>

                <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs font-semibold text-slate-200 shrink-0">
                  {currentNote.center}
                </span>
              </div>

              {/* Metadata chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Lead Initiator / Researcher</span>
                  <span className="text-white font-medium block mt-0.5">{currentNote.initiators}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Research Center</span>
                  <span className="text-white font-medium block mt-0.5">{currentNote.center} Station</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Current Decision</span>
                  <span className="text-emerald-400 font-semibold block mt-0.5">{currentNote.decision}</span>
                </div>
              </div>

              {/* Decision Choice */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Evaluation Verdict / Decision
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(
                    [
                      'Accepted',
                      'Accepted with modification',
                      'Conditionally Accepted',
                      'Rejected',
                      'Pended',
                      'Merged'
                    ] as DecisionType[]
                  ).map((dec) => {
                    const isSelected = decisionInput === dec;
                    return (
                      <button
                        key={dec}
                        type="button"
                        onClick={() => setDecisionInput(dec)}
                        className={`p-2 rounded-lg text-xs font-medium border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600/30 border-blue-500 text-white font-bold ring-1 ring-blue-500'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                        }`}
                      >
                        <span className="truncate">{dec}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reviewer Technical Comments & Directives */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Technical Directives / Reviewer Directives (Official Guidance)
                </label>
                <textarea
                  rows={3}
                  value={commentsInput}
                  onChange={(e) => setCommentsInput(e.target.value)}
                  placeholder="e.g. Include proper standard check/s; design be factorial RCBD; locations be three; incorporate soil analysis and partial budget analysis..."
                  className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Evaluator name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Reviewing Body / Panel Name
                  </label>
                  <input
                    type="text"
                    value={evaluatorName}
                    onChange={(e) => setEvaluatorName(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-end justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/20 transition-all font-semibold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Record Panel Decision for CN #{currentNote.no}</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center text-slate-500 text-xs">No proposal selected</div>
          )}
        </div>
      </div>

      {/* Live Review Audit Log Feed */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-sm font-semibold text-white">Live Review Audit Log Feed</h2>
            <span className="text-xs font-mono text-slate-400">({auditLogs.length} events logged)</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">September 04–17, 2026 Cycle</span>
        </div>

        <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
          {auditLogs.map((log) => (
            <div
              key={log.id}
              className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center font-bold text-xs">
                    <FileCheck className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">CN #{log.conceptNoteNo}</span>
                    <span className="text-slate-400">· {log.center}</span>
                    <span className="text-blue-400 font-mono text-[11px]">({log.directorate} / {log.team})</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">{log.title}</p>
                  {log.comments && (
                    <p className="text-[11px] text-amber-400/90 mt-1 italic flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 shrink-0" />
                      <span>{log.comments}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 sm:self-center self-end shrink-0 font-mono text-xs">
                <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 border border-slate-700">
                  {log.newDecision}
                </span>
                <span className="text-slate-500 text-[11px]">{log.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
