import React, { useState } from 'react';

export interface BarChartItem {
  id: string | number;
  label: string;
  total: number;
  approved: number;
  secondary?: number;
  rate: number; // e.g. 94.2
  category?: string;
}

interface HorizontalBarChartProps {
  items: BarChartItem[];
  title?: string;
  totalLabel?: string;
  approvedLabel?: string;
  maxTotal?: number;
  onItemClick?: (item: BarChartItem) => void;
  selectedId?: string | number | null;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  items,
  totalLabel = 'Total Submitted',
  approvedLabel = 'Accepted',
  maxTotal,
  onItemClick,
  selectedId
}) => {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  const highestVal = maxTotal || Math.max(...items.map((i) => i.total), 100);

  return (
    <div className="w-full space-y-2.5">
      {/* Legend */}
      <div className="flex items-center justify-end gap-5 text-xs text-slate-400 pb-1">
        <div className="flex items-center gap-2">
          <span className="w-3 h-2.5 rounded-xs bg-slate-700 inline-block"></span>
          <span>{totalLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-2.5 rounded-xs bg-blue-500 inline-block"></span>
          <span>{approvedLabel}</span>
        </div>
      </div>

      {/* Bars */}
      <div className="space-y-2">
        {items.map((item) => {
          const isSelected = selectedId === item.id;
          const isHovered = hoveredId === item.id;
          const totalWidthPercent = Math.min(100, (item.total / highestVal) * 100);
          const approvedWidthPercent = item.total > 0 ? (item.approved / item.total) * 100 : 0;

          return (
            <div
              key={item.id}
              onClick={() => onItemClick?.(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group px-2.5 py-1.5 rounded-lg transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-slate-800/80 border-blue-500/60 shadow-md'
                  : isHovered
                  ? 'bg-slate-800/40 border-slate-700/60'
                  : 'bg-transparent border-transparent hover:bg-slate-900/40'
              }`}
            >
              {/* Row Header */}
              <div className="flex items-center justify-between text-xs mb-1">
                <div className="flex items-center gap-2 truncate max-w-[240px]">
                  <span className="font-medium text-slate-200 group-hover:text-white truncate">
                    {item.label}
                  </span>
                  {item.category && (
                    <span className="text-[10px] text-slate-400 font-mono">
                      · {item.category}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] tabular-nums">
                  <span className="text-slate-400">
                    <span className="text-blue-400 font-semibold">{item.approved}</span> / {item.total}
                  </span>
                  <span
                    className={`font-semibold px-1.5 py-0.5 rounded text-[10px] ${
                      item.rate >= 80
                        ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40'
                        : item.rate >= 60
                        ? 'text-blue-400 bg-blue-950/60 border border-blue-800/40'
                        : 'text-amber-400 bg-amber-950/60 border border-amber-800/40'
                    }`}
                  >
                    {item.rate.toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Stacked Comparative Bar */}
              <div className="relative h-3 w-full bg-slate-800/60 rounded-full overflow-hidden">
                {/* Total Submitted Bar Container */}
                <div
                  className="h-full bg-slate-700/70 rounded-full relative overflow-hidden transition-all duration-300"
                  style={{ width: `${totalWidthPercent}%` }}
                >
                  {/* Approved Share inside Total */}
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-l-full transition-all duration-500"
                    style={{ width: `${approvedWidthPercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
