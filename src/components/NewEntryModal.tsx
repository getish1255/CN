import React, { useState } from 'react';
import { CenterStat, DecisionType, DirectorateStat } from '../types/dashboard';
import { BookOpen, FileCheck, X } from 'lucide-react';

interface NewEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  directorates: DirectorateStat[];
  centers: CenterStat[];
  onSubmitConceptNote: (data: {
    title: string;
    initiators: string;
    center: string;
    directorate: string;
    team: string;
    decision: DecisionType;
    comments?: string;
  }) => void;
}

export const NewEntryModal: React.FC<NewEntryModalProps> = ({
  isOpen,
  onClose,
  directorates,
  centers,
  onSubmitConceptNote
}) => {
  const [conceptTitle, setConceptTitle] = useState('');
  const [researcherName, setResearcherName] = useState('');
  const [selectedCenter, setSelectedCenter] = useState(centers[0]?.name || 'BARC');
  const [selectedDirectorate, setSelectedDirectorate] = useState(directorates[0]?.name || 'Crop');
  const [selectedTeam, setSelectedTeam] = useState('Cereals');
  const [conceptDecision, setConceptDecision] = useState<DecisionType>('Accepted');
  const [reviewerComments, setReviewerComments] = useState('');

  if (!isOpen) return null;

  const handleConceptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conceptTitle.trim() || !researcherName.trim()) return;

    onSubmitConceptNote({
      title: conceptTitle,
      initiators: researcherName,
      center: selectedCenter,
      directorate: selectedDirectorate,
      team: selectedTeam,
      decision: conceptDecision,
      comments: reviewerComments.trim() ? reviewerComments.trim() : undefined
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in duration-150 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>OARI Review Panel Intake</span>
        </div>
        <h2 className="text-lg font-bold text-white mb-1">Record New Concept Note Proposal</h2>
        <p className="text-xs text-slate-400 mb-4">
          Register an official concept note into the 2020 EC review database with technical directives and panel decision.
        </p>

        <form onSubmit={handleConceptSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Research Proposal Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Multi-Location Performance Trial of High-Yielding Teff Genotypes under Low Moisture Stress"
              value={conceptTitle}
              onChange={(e) => setConceptTitle(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Lead Researcher / Initiator(s)
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Abebe G. & Chala M."
                value={researcherName}
                onChange={(e) => setResearcherName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Panel Decision
              </label>
              <select
                value={conceptDecision}
                onChange={(e) => setConceptDecision(e.target.value as DecisionType)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="Accepted">Accepted (Direct)</option>
                <option value="Accepted with modification">Accepted with Modifications</option>
                <option value="Conditionally Accepted">Conditionally Accepted</option>
                <option value="Rejected">Rejected</option>
                <option value="Pended">Pended</option>
                <option value="Merged">Merged</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Directorate
              </label>
              <select
                value={selectedDirectorate}
                onChange={(e) => setSelectedDirectorate(e.target.value)}
                className="w-full px-2.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 text-xs"
              >
                {directorates.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Research Center
              </label>
              <select
                value={selectedCenter}
                onChange={(e) => setSelectedCenter(e.target.value)}
                className="w-full px-2.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 text-xs"
              >
                {centers.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Team / Commodity
              </label>
              <input
                type="text"
                placeholder="e.g. Cereals, Feeds..."
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="w-full px-2.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Reviewer Technical Directives / Comments (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. add N as additional factor; design be factorial RCBD; include proper standard check/s"
              value={reviewerComments}
              onChange={(e) => setReviewerComments(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium shadow-sm shadow-blue-500/20 transition-all"
            >
              Submit Concept Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
