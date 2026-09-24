import React, { useState } from 'react';

interface DataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
}

interface AreaChartProps {
  data: DataPoint[];
  title?: string;
  valuePrefix?: string;
  secondaryPrefix?: string;
  primaryColor?: string;
  secondaryColor?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  height?: number;
}

export const AreaChart: React.FC<AreaChartProps> = ({
  data,
  valuePrefix = '$',
  secondaryPrefix = '',
  primaryColor = '#3B82F6', // Blue
  secondaryColor = '#10B981', // Emerald
  primaryLabel = 'Revenue',
  secondaryLabel,
  height = 220
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return <div className="h-48 flex items-center justify-center text-slate-500 text-sm">No data available</div>;
  }

  const values = data.map((d) => d.value);
  const secondaryValues = data.map((d) => d.secondaryValue ?? 0);
  const hasSecondary = secondaryLabel && data.some((d) => d.secondaryValue !== undefined);

  const maxVal = Math.max(...values, ...(hasSecondary ? secondaryValues : [0])) * 1.15 || 100;
  const minVal = 0;

  const width = 700;
  const paddingX = 40;
  const paddingTop = 20;
  const paddingBottom = 30;
  const innerWidth = width - paddingX * 2;
  const innerHeight = height - paddingTop - paddingBottom;

  const getX = (index: number) => paddingX + (index / (data.length - 1)) * innerWidth;
  const getY = (val: number) => paddingTop + innerHeight - ((val - minVal) / (maxVal - minVal)) * innerHeight;

  // Generate smooth cubic bezier path
  const createSplinePath = (pts: { x: number; y: number }[]) => {
    if (pts.length === 0) return '';
    if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

    let path = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? 0 : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return path;
  };

  const primaryPoints = data.map((d, i) => ({ x: getX(i), y: getY(d.value) }));
  const primaryLine = createSplinePath(primaryPoints);
  const primaryArea = `${primaryLine} L ${getX(data.length - 1)} ${paddingTop + innerHeight} L ${getX(0)} ${paddingTop + innerHeight} Z`;

  let secondaryLine = '';
  let secondaryArea = '';
  if (hasSecondary) {
    const secondaryPoints = data.map((d, i) => ({ x: getX(i), y: getY(d.secondaryValue || 0) }));
    secondaryLine = createSplinePath(secondaryPoints);
    secondaryArea = `${secondaryLine} L ${getX(data.length - 1)} ${paddingTop + innerHeight} L ${getX(0)} ${paddingTop + innerHeight} Z`;
  }

  // Y-axis grid ticks
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
    const val = minVal + ratio * (maxVal - minVal);
    return {
      y: getY(val),
      val: Math.round(val)
    };
  });

  return (
    <div className="relative w-full select-none" onMouseLeave={() => setHoverIndex(null)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="primaryGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0.0" />
          </linearGradient>
          {hasSecondary && (
            <linearGradient id="secondaryGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.25" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.0" />
            </linearGradient>
          )}
        </defs>

        {/* Horizontal grid lines */}
        {yTicks.map((tick, i) => (
          <g key={i}>
            <line
              x1={paddingX}
              y1={tick.y}
              x2={width - paddingX}
              y2={tick.y}
              stroke="rgba(148, 163, 184, 0.12)"
              strokeDasharray="4 4"
            />
            <text
              x={paddingX - 8}
              y={tick.y + 3}
              textAnchor="end"
              className="text-[10px] fill-slate-400 font-mono tabular-nums"
            >
              {valuePrefix}
              {tick.val >= 1000 ? `${(tick.val / 1000).toFixed(0)}k` : tick.val}
            </text>
          </g>
        ))}

        {/* Secondary area if present */}
        {hasSecondary && (
          <>
            <path d={secondaryArea} fill="url(#secondaryGrad)" />
            <path d={secondaryLine} fill="none" stroke={secondaryColor} strokeWidth="2" strokeDasharray="3 3" />
          </>
        )}

        {/* Primary Area & Line */}
        <path d={primaryArea} fill="url(#primaryGrad)" />
        <path
          d={primaryLine}
          fill="none"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hover column guideline */}
        {hoverIndex !== null && (
          <line
            x1={getX(hoverIndex)}
            y1={paddingTop}
            x2={getX(hoverIndex)}
            y2={paddingTop + innerHeight}
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        )}

        {/* Interactive nodes */}
        {data.map((d, i) => {
          const isHovered = hoverIndex === i;
          return (
            <g key={i}>
              <circle
                cx={getX(i)}
                cy={getY(d.value)}
                r={isHovered ? 5 : 3}
                fill={primaryColor}
                stroke="#0F172A"
                strokeWidth="2"
                className="transition-all duration-150 cursor-pointer"
              />
              {/* Invisible touch/mouse target */}
              <rect
                x={getX(i) - innerWidth / (data.length * 2)}
                y={paddingTop}
                width={innerWidth / data.length}
                height={innerHeight}
                fill="transparent"
                onMouseEnter={() => setHoverIndex(i)}
                className="cursor-pointer"
              />
              {/* X-axis labels */}
              {(i === 0 || i === Math.floor(data.length / 2) || i === data.length - 1 || isHovered) && (
                <text
                  x={getX(i)}
                  y={height - 8}
                  textAnchor="middle"
                  className={`text-[10px] font-mono transition-colors ${
                    isHovered ? 'fill-slate-100 font-semibold' : 'fill-slate-400'
                  }`}
                >
                  {d.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating Hover Tooltip */}
      {hoverIndex !== null && (
        <div
          className="absolute pointer-events-none z-30 transform -translate-x-1/2 -translate-y-full bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-lg p-2.5 shadow-xl text-xs whitespace-nowrap transition-all duration-75"
          style={{
            left: `${(getX(hoverIndex) / width) * 100}%`,
            top: `${Math.max(10, (getY(data[hoverIndex].value) / height) * 100 - 12)}%`
          }}
        >
          <div className="text-[11px] font-medium text-slate-400 pb-1 border-b border-slate-800 mb-1.5 flex items-center justify-between gap-3">
            <span>{data[hoverIndex].label}</span>
            <span className="text-[10px] text-slate-400">Live Snapshot</span>
          </div>
          <div className="flex items-center justify-between gap-4 py-0.5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: primaryColor }} />
              {primaryLabel}
            </span>
            <span className="font-mono font-bold text-white tabular-nums">
              {valuePrefix}
              {data[hoverIndex].value.toLocaleString()}
            </span>
          </div>
          {hasSecondary && data[hoverIndex].secondaryValue !== undefined && (
            <div className="flex items-center justify-between gap-4 py-0.5 mt-0.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: secondaryColor }} />
                {secondaryLabel}
              </span>
              <span className="font-mono font-bold text-emerald-400 tabular-nums">
                {secondaryPrefix}
                {data[hoverIndex].secondaryValue?.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
