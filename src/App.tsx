import React, { useState } from 'react';
import { ConceptNote, DashboardTab, DecisionType, ResearcherStat } from './types/dashboard';
import { useRealTimeData } from './hooks/useRealTimeData';
import { Header } from './components/Header';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { ConceptNotesExplorer } from './components/ConceptNotesExplorer';
import { ResearchReviewDashboard } from './components/ResearchReviewDashboard';
import { TeamsCommoditiesView } from './components/TeamsCommoditiesView';
import { DecisionEvaluator } from './components/DecisionEvaluator';
import { RecordInspectorModal } from './components/RecordInspectorModal';
import { NewEntryModal } from './components/NewEntryModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [selectedResearcher, setSelectedResearcher] = useState<ResearcherStat | null>(null);
  const [selectedConceptNote, setSelectedConceptNote] = useState<ConceptNote | null>(null);
  const [selectedTeamFilter, setSelectedTeamFilter] = useState<string>('all');
  const [isNewEntryOpen, setIsNewEntryOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  const {
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
    updateConceptNoteDecision,
    addConceptNote
  } = useRealTimeData();

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3400);
  };

  const handleCreateConceptNote = (data: {
    title: string;
    initiators: string;
    center: string;
    directorate: string;
    team: string;
    decision: DecisionType;
    comments?: string;
  }) => {
    addConceptNote(data);
    showToast(`New Concept Note registered: "${data.title.slice(0, 42)}..."`);
  };

  const handleUpdateDecision = (no: number, newDecision: DecisionType, comments?: string, evaluator?: string) => {
    updateConceptNoteDecision(no, newDecision, comments, evaluator);
    showToast(`CN #${no} updated to "${newDecision}"`);
  };

  const handleExportAll = () => {
    const dataSnapshot = {
      institution: 'Oromia Agricultural Research Institute (OARI)',
      reportTitle: 'Research Concept Note Review Decision Summary Report',
      screeningCycle: 'September 04–17, 2026 (2020 EC)',
      exportedAt: new Date().toISOString(),
      executiveSummary: oariStats,
      directoratePerformanceTable1: directorates,
      centerPerformanceTable2: centers,
      researchTeamsBreakdown: teams,
      leadResearchersTable3: researchers,
      totalConceptNotesCount: conceptNotes.length,
      conceptNotes: conceptNotes
    };

    const blob = new Blob([JSON.stringify(dataSnapshot, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `OARI_Concept_Notes_2020_EC_Full_Registry_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Complete 1,734 Concept Notes screening dataset exported to JSON');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      {/* Institutional Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isLive={isLive}
        onToggleLive={() => setIsLive(!isLive)}
        pulseActive={pulseActive}
        onOpenNewEntry={() => setIsNewEntryOpen(true)}
        onExport={handleExportAll}
        totalNotesCount={conceptNotes.length}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Tab 1: Executive Overview */}
        {activeTab === 'overview' && (
          <ExecutiveOverview
            oariStats={oariStats}
            directorates={directorates}
            centers={centers}
            teams={teams}
            researchers={researchers}
            onNavigateTab={setActiveTab}
            onSelectResearcher={(r) => setSelectedResearcher(r)}
          />
        )}

        {/* Tab 2: Concept Notes Explorer (All 1,734 Proposals) */}
        {activeTab === 'concept-notes' && (
          <ConceptNotesExplorer
            conceptNotes={conceptNotes}
            onSelectConceptNote={(n) => setSelectedConceptNote(n)}
            onUpdateDecision={handleUpdateDecision}
            initialTeam={selectedTeamFilter}
          />
        )}

        {/* Tab 3: Table 1 Directorate Performance */}
        {activeTab === 'directorates' && (
          <ResearchReviewDashboard
            oariStats={oariStats}
            directorates={directorates}
            centers={centers}
            researchers={researchers}
            onSelectResearcher={(r) => setSelectedResearcher(r)}
            onOpenNewConceptNote={() => setIsNewEntryOpen(true)}
            initialSection="directorates"
          />
        )}

        {/* Tab 4: Table 2 Research Center Performance */}
        {activeTab === 'centers' && (
          <ResearchReviewDashboard
            oariStats={oariStats}
            directorates={directorates}
            centers={centers}
            researchers={researchers}
            onSelectResearcher={(r) => setSelectedResearcher(r)}
            onOpenNewConceptNote={() => setIsNewEntryOpen(true)}
            initialSection="centers"
          />
        )}

        {/* Tab 5: Teams & Commodities Matrix */}
        {activeTab === 'teams' && (
          <TeamsCommoditiesView
            teams={teams}
            onSelectTeam={(t) => {
              setSelectedTeamFilter(t.name);
              setActiveTab('concept-notes');
            }}
          />
        )}

        {/* Tab 6: Table 3 Evaluated Researchers */}
        {activeTab === 'researchers' && (
          <ResearchReviewDashboard
            oariStats={oariStats}
            directorates={directorates}
            centers={centers}
            researchers={researchers}
            onSelectResearcher={(r) => setSelectedResearcher(r)}
            onOpenNewConceptNote={() => setIsNewEntryOpen(true)}
            initialSection="researchers"
          />
        )}

        {/* Tab 7: Review Session & Decision Evaluator */}
        {activeTab === 'evaluator' && (
          <DecisionEvaluator
            conceptNotes={conceptNotes}
            auditLogs={auditLogs}
            isLive={isLive}
            onToggleLive={() => setIsLive(!isLive)}
            speed={speed}
            onSetSpeed={setSpeed}
            onUpdateDecision={handleUpdateDecision}
            onSelectConceptNote={(n) => setSelectedConceptNote(n)}
          />
        )}
      </main>

      {/* Floating Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 border border-blue-500/60 text-white text-xs px-4 py-3 rounded-lg shadow-xl shadow-black/40 animate-in fade-in slide-in-from-bottom-3 duration-200 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-medium">{notification}</span>
        </div>
      )}

      {/* Record Inspector Modal */}
      <RecordInspectorModal
        researcher={selectedResearcher}
        conceptNote={selectedConceptNote}
        onClose={() => {
          setSelectedResearcher(null);
          setSelectedConceptNote(null);
        }}
      />

      {/* New Concept Note Modal */}
      <NewEntryModal
        isOpen={isNewEntryOpen}
        onClose={() => setIsNewEntryOpen(false)}
        directorates={directorates}
        centers={centers}
        onSubmitConceptNote={handleCreateConceptNote}
      />

      {/* Clean Institutional Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/90 px-4 sm:px-6 lg:px-8 py-5 mt-auto text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">OARI Research Concept Note Review System</span>
            <span>·</span>
            <span>2020 EC Screening Decision Report (Sep 04–17, 2026)</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span>1,734 Proposals</span>
            <span>·</span>
            <span>9 Directorates</span>
            <span>·</span>
            <span>20 Centers</span>
            <span>·</span>
            <span>28 Teams</span>
            <span>·</span>
            <span className="text-emerald-400 font-semibold">72.3% Approved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
