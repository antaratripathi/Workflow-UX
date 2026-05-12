import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, SkipForward, Loader2, FileBarChart2, Users, BrainCircuit, ScanEye, FileText, UserSearch, ChartColumn } from 'lucide-react';

// BookSearch icon — inlined from lucide.dev since lucide-react@0.487.0 doesn't export it yet
function BookSearch({ size = 24, color = 'currentColor', strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
      <path d="m21 22-1.879-1.878" />
      <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
      <circle cx="17" cy="18" r="3" />
    </svg>
  );
}

type StageStatus = 'completed' | 'active' | 'pending' | 'skipped';

interface Stage {
  id: string;
  label: string;
  icon: typeof CheckCircle2;
  status: StageStatus;
  annotation: string;
  skipReason?: string;
  percent?: number;
  detail?: string;
  accent?: { color: string; bg: string };
}

const INITIAL_STAGES: Stage[] = [
  {
    id: 'setup',
    label: 'Research Setup',
    icon: BookSearch,
    status: 'completed',
    annotation: 'Research parameters, scenario, and evaluation criteria have been successfully configured.',
  },
  {
    id: 'distribution',
    label: 'Survey Distribution',
    icon: UserSearch,
    status: 'active',
    percent: 0,
    annotation: 'Surveys are being distributed to target respondents matching your audience profile.',
    detail: 'of 100 target respondents completed',
  },
  {
    id: 'heatmap',
    label: 'Heatmap Analysis',
    icon: ScanEye,
    status: 'skipped',
    annotation: 'Eye-tracking heatmaps will be generated from the uploaded visual assets after survey distribution completes.',
    accent: { color: '#F97316', bg: '#FFF7ED' },
  },
  {
    id: 'analysis',
    label: 'Survey Analysis',
    icon: ChartColumn,
    status: 'pending',
    annotation: 'AI-powered analysis will begin once the survey reaches 80% completion threshold.',
  },
  {
    id: 'report',
    label: 'Report Generation',
    icon: FileBarChart2,
    status: 'pending',
    annotation: 'Your final research report will be compiled once all active stages are complete.',
  },
];

const STATUS_CONFIG: Record<StageStatus, { color: string; bg: string; border: string; label: string }> = {
  completed: { color: '#059669', bg: '#ECFDF5', border: '#6EE7B7', label: 'Completed' },
  active:    { color: '#059669', bg: '#ECFDF5', border: '#6EE7B7', label: 'In Progress' },
  pending:   { color: 'rgba(10,10,10,0.28)', bg: 'rgba(10,10,10,0.03)', border: 'rgba(10,10,10,0.08)', label: 'Pending' },
  skipped:   { color: 'rgba(10,10,10,0.3)', bg: 'rgba(10,10,10,0.03)', border: 'rgba(10,10,10,0.1)', label: 'Skipped' },
};

function StatusBadge({ status, accent }: { status: StageStatus; accent?: { color: string; bg: string } }) {
  const baseCfg = STATUS_CONFIG[status];
  const color = accent ? accent.color : baseCfg.color;
  const bg = accent ? accent.bg : baseCfg.bg;
  const border = accent ? accent.color : baseCfg.border;
  const icons: Record<StageStatus, JSX.Element> = {
    completed: <CheckCircle2 size={10} color={color} />,
    active:    <Loader2 size={10} color={color} className="animate-spin" />,
    pending:   <Clock size={10} color={color} />,
    skipped:   <SkipForward size={10} color={color} />,
  };
  return (
    <span className="flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: bg, border: `1px solid ${border}` }}>
      {icons[status]}
      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color, letterSpacing: '0.3px' }}>{baseCfg.label}</span>
    </span>
  );
}

function StageNode({ stage, index, total, isLast }: { stage: Stage; index: number; total: number; isLast: boolean }) {
  const cfg = STATUS_CONFIG[stage.status];
  const isCompleted = stage.status === 'completed';
  const isActive = stage.status === 'active';
  const isSkipped = stage.status === 'skipped';
  const isPending = stage.status === 'pending';

  const nodeColor = stage.accent ? stage.accent.color : isCompleted ? '#059669' : isActive ? '#059669' : 'rgba(10,10,10,0.2)';
  const nodeBorderColor = stage.accent ? stage.accent.color : cfg.border;
  const nodeBg = stage.accent ? stage.accent.bg : isCompleted || isActive ? '#ECFDF5' : '#F9F9F9';

  // Line fill: completed → full green, else grey
  const lineColor = isCompleted ? '#6EE7B7' : 'rgba(10,10,10,0.08)';

  return (
    <div className="flex gap-4">
      {/* Left: node + connector line */}
      <div className="flex flex-col items-center" style={{ width: 36, flexShrink: 0 }}>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.12, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center rounded-full"
          style={{
            width: 36, height: 36,
            background: nodeBg,
            border: `0.5px solid ${nodeBorderColor}`,
            boxShadow: 'none',
          }}
        >
          {isActive
            ? <stage.icon size={16} color={nodeColor} strokeWidth={2} />
            : isCompleted
              ? <stage.icon size={16} color={nodeColor} strokeWidth={2} />
              : isSkipped && !stage.accent
                ? <SkipForward size={16} color={nodeColor} strokeWidth={2} />
                : <stage.icon size={16} color={nodeColor} strokeWidth={1.5} />
          }
        </motion.div>
        {!isLast && (
          <div className="flex-1 w-0.5 mt-1 rounded-full overflow-hidden" style={{ background: 'rgba(10,10,10,0.08)', minHeight: 28 }}>
            {isCompleted && (
              <motion.div
                className="w-full rounded-full"
                style={{ background: '#6EE7B7' }}
                initial={{ height: '0%' }}
                animate={{ height: '100%' }}
                transition={{ delay: index * 0.12 + 0.2, duration: 0.5, ease: 'easeOut' }}
              />
            )}
          </div>
        )}
      </div>

      {/* Right: content card */}
      <motion.div
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.12 + 0.05, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1 pb-5"
        style={{ opacity: (isPending || isSkipped) && !stage.accent ? 0.55 : 1 }}
      >
        <div className="flex items-center gap-2 mb-1">
          <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: stage.accent ? stage.accent.color : isPending ? 'rgba(10,10,10,0.4)' : '#0a0a0a' }}>
            {stage.label}
          </p>
          <StatusBadge status={stage.status} accent={stage.accent} />
        </div>

        {/* Progress bar for active stage */}
        {isActive && stage.percent !== undefined && (
          <div className="mb-2">
            <div className="flex items-center justify-between mb-1">
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#059669', fontWeight: 600 }}>
                {stage.percent}% — {stage.percent} {stage.detail}
              </span>
            </div>
            <div className="rounded-full overflow-hidden" style={{ height: 6, background: 'rgba(10,10,10,0.07)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: '#059669' }}
                initial={{ width: '0%' }}
                animate={{ width: `${stage.percent}%` }}
                transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}

        {/* Annotation */}
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: isPending ? 'rgba(10,10,10,0.3)' : 'rgba(10,10,10,0.5)', lineHeight: '17px' }}>
          {stage.annotation}
        </p>

        {/* Skip reason pill */}
        {isSkipped && stage.skipReason && (
          <div className="flex items-start gap-1.5 mt-2 rounded-lg px-2.5 py-1.5" style={{ background: '#FFFBEB', border: '1px solid #FCD34D' }}>
            <SkipForward size={11} color="#D97706" style={{ marginTop: 1, flexShrink: 0 }} />
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#92400E', lineHeight: '16px' }}>
              <span style={{ fontWeight: 600 }}>Skip reason: </span>{stage.skipReason}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function ResearchProgressView() {
  const [stages, setStages] = useState<Stage[]>(INITIAL_STAGES);
  const [overallPct, setOverallPct] = useState(0);

  // Simulate survey progress ticking up
  useEffect(() => {
    let pct = 0;
    const target = 67;
    const interval = setInterval(() => {
      pct += 1;
      setStages(prev => prev.map(s =>
        s.id === 'distribution' ? { ...s, percent: pct } : s
      ));
      if (pct >= target) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, []);

  // Overall % = weighted: setup 20% + distribution 40% + analysis 25% + report 15%
  useEffect(() => {
    const activeStage = stages.find(s => s.id === 'distribution');
    const surveySplit = activeStage?.percent ?? 0;
    const raw = 20 + Math.round((surveySplit / 100) * 40);
    const target = raw;
    let cur = overallPct;
    const step = () => {
      if (cur < target) {
        cur++;
        setOverallPct(cur);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [stages]);

  const completedCount = stages.filter(s => s.status === 'completed').length;
  const activeStage = stages.find(s => s.status === 'active');

  return (
    <div className="w-full" style={{ maxWidth: 540 }}>
      {/* Overall progress summary card */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4 mb-5 rounded-2xl px-4 py-3"
        style={{ background: 'white', border: '1px solid rgba(139,92,246,0.15)', boxShadow: '0 1px 4px rgba(139,92,246,0.06)' }}
      >
        {/* Large % */}
        <div className="shrink-0 flex flex-col items-center" style={{ minWidth: 52 }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 28, color: '#6D28D9', lineHeight: 1, letterSpacing: '-1px' }}
          >
            {overallPct}%
          </motion.span>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 9, fontWeight: 500, color: 'rgba(109,40,217,0.45)', textTransform: 'uppercase', letterSpacing: '0.4px', marginTop: 2 }}>
            Overall
          </span>
        </div>

        {/* Thin vertical rule */}
        <div style={{ width: 1, height: 36, background: 'rgba(139,92,246,0.12)', flexShrink: 0 }} />

        {/* Segmented stage bar */}
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex gap-1">
            {stages.filter(s => s.status !== 'skipped' || s.accent).map((s) => {
              const filled = s.status === 'completed';
              const active = s.status === 'active';
              return (
                <div key={s.id} className="flex-1 rounded-full overflow-hidden" style={{ height: 5, background: filled ? 'transparent' : 'rgba(139,92,246,0.1)' }}>
                  {filled && (
                    <motion.div
                      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      style={{ background: '#8B5CF6', transformOrigin: 'left', height: '100%', borderRadius: 99 }}
                    />
                  )}
                  {active && (
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #C4B5FD, #8B5CF6)' }}
                      initial={{ width: '0%' }}
                      animate={{ width: `${overallPct}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  )}
                  {!filled && !active && (
                    <div className="h-full w-full rounded-full" style={{ background: 'rgba(139,92,246,0.1)' }} />
                  )}
                </div>
              );
            })}
          </div>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10.5, color: 'rgba(109,40,217,0.5)' }}>
            {stages.filter(s => s.status === 'completed').length} of {stages.filter(s => s.status !== 'skipped' || s.accent).length} stages complete
          </span>
        </div>

        {/* Status pill */}
        <div className="shrink-0 flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.18)' }}>
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#8B5CF6' }} />
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: '#6D28D9', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            In Progress
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="rounded-2xl px-5 pt-5 pb-3" style={{ background: 'white', border: '1px solid rgba(10,10,10,0.07)' }}>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, color: 'rgba(10,10,10,0.35)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 16 }}>
          Research Timeline
        </p>
        {(() => {
          const pipeline = stages.filter(s => s.status !== 'skipped' || s.accent);
          return pipeline.map((stage, i) => (
            <StageNode
              key={stage.id}
              stage={stage}
              index={i}
              total={pipeline.length}
              isLast={i === pipeline.length - 1}
            />
          ));
        })()}

        {/* Skipped steps — rendered as a soft informational note, not part of the pipeline */}
        {stages.some(s => s.status === 'skipped' && !s.accent) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mb-4 rounded-xl px-3.5 py-3"
            style={{ background: 'rgba(139,92,246,0.05)', border: '1px dashed #C4B5FD' }}
          >
            <div className="flex items-center gap-1.5 mb-2.5">
              
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: '#8B5CF6', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Not applicable to this research
              </span>
            </div>
            {stages.filter(s => s.status === 'skipped' && !s.accent).map(stage => (
              <div key={stage.id} className="flex items-start gap-2.5">
                <div className="flex items-center justify-center rounded-lg mt-0.5" style={{ width: 26, height: 26, background: 'rgba(139,92,246,0.08)', border: '1px solid #C4B5FD', flexShrink: 0 }}>
                  <stage.icon size={13} color="#A78BFA" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: '#6D28D9' }}>
                    {stage.label}
                  </p>
                  {stage.skipReason && (
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(109,40,217,0.55)', marginTop: 2, lineHeight: '15px' }}>
                      {stage.skipReason}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="flex items-center justify-center gap-2 mt-4"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, color: 'rgba(10,10,10,0.4)' }}>
          You'll be notified when your report is ready. You may safely close this window.
        </p>
      </motion.div>
    </div>
  );
}