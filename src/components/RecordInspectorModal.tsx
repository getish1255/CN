import React from 'react';
import { ConceptNote, ResearcherStat } from '../types/dashboard';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  FileCheck,
  GitMerge,
  MessageSquare,
  Microscope,
  User,
  X,
  XCircle,
  AlertCircle
} from 'lucide-react';

interface RecordInspectorModalProps {
  researcher: ResearcherStat | null;
  conceptNote: ConceptNote | null;
  onClose: () => void;
}

export const RecordInspectorModal: React.FC<RecordInspectorModalProps> = ({
  researcher,
  conceptNote,
  onClose
}) => {
  if (!researcher && !conceptNote) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in duration-150 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Concept Note Inspector */}
        {conceptNote && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                #{conceptNote.no}
              </div>
              <div>
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wide">
                  OARI Concept Note Detail
                </span>
                <h3 className="text-base font-bold text-white leading-snug">{conceptNote.title}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Research Center</span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                  {conceptNote.center} Station
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Directorate</span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                  {conceptNote.directorate}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Research Team / Discipline</span>
                <span className="text-sm font-semibold text-blue-400 mt-0.5 block">
                  {conceptNote.team}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Evaluation Verdict</span>
                <span className="text-sm font-semibold text-emerald-400 mt-0.5 block">
                  {conceptNote.decision}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Lead Initiators / Researchers</span>
              <span className="text-sm font-medium text-white mt-0.5 block">{conceptNote.initiators}</span>
            </div>

            {/* Reviewer Comments & Technical Directives */}
            <div className="p-4 rounded-lg bg-blue-950/20 border border-blue-900/40 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <MessageSquare className="w-4 h-4" />
                <span>Reviewer Directives / Technical Comments</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {conceptNote.comments
                  ? conceptNote.comments
                  : 'No specific modification condition attached. The proposal aligns with institutional agroecology mandates, standard checks, and experimental protocols.'}
              </p>
            </div>
          </div>
        )}

        {/* Researcher Detail */}
        {researcher && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                #{researcher.no}
              </div>
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wide">
                  OARI Researcher Profile
                </span>
                <h3 className="text-lg font-bold text-white">{researcher.name}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Research Center</span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                  {researcher.center}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Directorate</span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                  {researcher.directorate}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Concept Notes Submitted</span>
                <span className="font-mono font-bold text-white text-sm tabular-nums">
                  {researcher.totalSub}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Direct Fully Accepted</span>
                <span className="font-mono font-bold text-emerald-400 text-sm tabular-nums">
                  {researcher.fullyAcc}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Conditionally Accepted</span>
                <span className="font-mono font-bold text-blue-400 text-sm tabular-nums">
                  {researcher.condAcc}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                <span className="text-slate-300 font-medium">Total Approved (Efficiency)</span>
                <span className="font-mono font-bold text-emerald-300 text-base tabular-nums">
                  {researcher.totalApp} ({researcher.accRate.toFixed(1)}%)
                </span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 leading-relaxed bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg">
              Official evaluation record during Oromia Agricultural Research Institute cycle September 04–17, 2026. This researcher meets all scientific novelty, regional relevance, and institutional methodology criteria.
            </div>
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
