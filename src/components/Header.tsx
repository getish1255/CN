import React from 'react';
import { DashboardTab } from '../types/dashboard';
import { Download, FileCheck, Layers, Pause, Play, Plus, RefreshCw, Sparkles, Building2, Users2, BookOpen, Microscope } from 'lucide-react';

interface HeaderProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  isLive: boolean;
  onToggleLive: () => void;
  pulseActive: boolean;
  onOpenNewEntry: () => void;
  onExport: () => void;
  totalNotesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  isLive,
  onToggleLive,
  pulseActive,
  onOpenNewEntry,
  onExport,
  totalNotesCount
}) => {
  const navItems: { id: DashboardTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Executive Summary', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'concept-notes', label: `Concept Notes (${totalNotesCount.toLocaleString()})`, icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'directorates', label: 'Directorates (Table 1)', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'centers', label: 'Centers (Table 2)', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'teams', label: 'Teams & Commodities', icon: <Microscope className="w-3.5 h-3.5" /> },
    { id: 'researchers', label: 'Researchers (Table 3)', icon: <Users2 className="w-3.5 h-3.5" /> },
    { id: 'evaluator', label: 'Review Session', icon: <FileCheck className="w-3.5 h-3.5" /> }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/90 bg-slate-950/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Wordmark & Official Seal */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              onTabChange('overview');
            }}
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 via-teal-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 font-bold text-sm">
              <Microscope className="w-4 h-4 text-white" />
            </span>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight text-white">OARI ReviewHQ</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-medium">
                  2020 EC
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium hidden sm:block">
                Oromia Agricultural Research Institute
              </span>
            </div>
          </a>
        </div>

        {/* Primary Single-Line Navigation */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-slate-900/80 border border-slate-800 rounded-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Live Review Session Indicator */}
          <button
            onClick={onToggleLive}
            title={isLive ? 'Pause review telemetry' : 'Resume review telemetry'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono transition-all border ${
              isLive
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/50 hover:bg-emerald-900/30'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-300'
            }`}
          >
            <span className="relative flex h-2 w-2">
              {isLive && (
                <span
                  className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${
                    pulseActive ? 'animate-ping scale-150' : 'animate-pulse'
                  }`}
                />
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  isLive ? 'bg-emerald-500' : 'bg-slate-500'
                }`}
              />
            </span>
            <span className="hidden sm:inline font-semibold">{isLive ? 'REVIEW LIVE' : 'PAUSED'}</span>
            {isLive ? <Pause className="w-3 h-3 text-emerald-400" /> : <Play className="w-3 h-3 text-slate-400" />}
          </button>

          {/* Export Report Data */}
          <button
            onClick={onExport}
            title="Export screening results to CSV / JSON"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>

          {/* New Proposal Record */}
          <button
            onClick={onOpenNewEntry}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New CN</span>
          </button>
        </div>
      </div>

      {/* Sub-nav for tablet & mobile */}
      <div className="xl:hidden mt-2 flex items-center gap-1 overflow-x-auto pb-1 border-t border-slate-900 pt-2 text-xs">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
