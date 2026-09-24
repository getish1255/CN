import React, { useState } from 'react';

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
  percentage?: number;
}

interface DonutChartProps {
  data: DonutSegment[];
  centerLabel?: string;
  centerValue?: string | number;
  size?: number;
  strokeWidth?: number;
  onSelectSegment?: (segment: DonutSegment) => void;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  centerLabel = 'Total',
  centerValue,
  size = 180,
  strokeWidth = 24,
  onSelectSegment
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercentage = 0;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
          {/* Base background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(30, 41, 59, 0.6)"
            strokeWidth={strokeWidth}
          />

          {/* Segments */}
          {data.map((item, index) => {
            const itemPercent = total > 0 ? item.value / total : 0;
            const strokeDasharray = `${circumference * itemPercent} ${circumference * (1 - itemPercent)}`;
            const strokeDashoffset = -circumference * accumulatedPercentage;
            accumulatedPercentage += itemPercent;

            const isHovered = hoveredIndex === index;

            return (
              <circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="butt"
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectSegment?.(item)}
              />
            );
          })}
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-[11px] text-slate-400 font-medium tracking-wide">
            {hoveredIndex !== null ? data[hoveredIndex].label : centerLabel}
          </span>
          <span className="text-xl font-bold text-white font-mono tabular-nums">
            {hoveredIndex !== null
              ? `${((data[hoveredIndex].value / total) * 100).toFixed(1)}%`
              : (centerValue ?? total.toLocaleString())}
          </span>
          {hoveredIndex !== null && (
            <span className="text-[10px] text-slate-400 font-mono">
              {data[hoveredIndex].value.toLocaleString()} items
            </span>
          )}
        </div>
      </div>

      {/* Interactive Legend Grid */}
      <div className="w-full mt-4 grid grid-cols-2 gap-2 text-xs">
        {data.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onSelectSegment?.(item)}
            className={`flex items-center justify-between p-1.5 rounded transition-all cursor-pointer ${
              hoveredIndex === idx ? 'bg-slate-800/80 ring-1 ring-slate-700' : 'hover:bg-slate-800/30'
            }`}
          >
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-slate-300 truncate text-[11px]">{item.label}</span>
            </div>
            <span className="font-mono text-slate-400 text-[10px] tabular-nums shrink-0 ml-1">
              {item.percentage !== undefined
                ? `${item.percentage}%`
                : `${((item.value / total) * 100).toFixed(1)}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
