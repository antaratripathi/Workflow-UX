import { useState } from 'react';
import { Plus, Search, ListFilter, Users, ArrowUpRight, User, CircleCheck, FileText, Clock, MoreHorizontal } from 'lucide-react';

type StatusFilter = 'all' | 'in-progress' | 'draft' | 'completed';

interface ResearchRow {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  assets: number;
  status: 'completed' | 'draft' | 'in-progress';
  tags: string[];
  createdOn: string;
  createdBy: { initials: string; name: string };
  hasIndicator?: boolean;
}

const SAMPLE_ROWS: ResearchRow[] = [
  { id: '1', badge: 'CP', badgeColor: 'linear-gradient(135deg, #C084FC 0%, #F472B6 100%)', title: 'test 07-05-26', assets: 1, status: 'completed', tags: [], createdOn: '5 days ago', createdBy: { initials: 'HA', name: 'Harshad' }, hasIndicator: true },
  { id: '2', badge: 'CR', badgeColor: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)', title: 'Ad Creative Ranking (Copy)', assets: 2, status: 'completed', tags: [], createdOn: '1 week ago', createdBy: { initials: 'HA', name: 'Harshad' } },
  { id: '3', badge: 'FGD', badgeColor: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)', title: 'To explore how general population US s...', assets: 4, status: 'completed', tags: [], createdOn: '1 week ago', createdBy: { initials: 'HA', name: 'Harshad' } },
  { id: '4', badge: 'FGD', badgeColor: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)', title: 'Met Gala Analysis', assets: 0, status: 'completed', tags: [], createdOn: '1 week ago', createdBy: { initials: 'HA', name: 'Harshad' }, hasIndicator: true },
  { id: '5', badge: 'FGD', badgeColor: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)', title: 'test with bookmark', assets: 0, status: 'completed', tags: [], createdOn: '1 week ago', createdBy: { initials: 'HA', name: 'Harshad' } },
  { id: '6', badge: 'FGD', badgeColor: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)', title: 'To explore how general population US s...', assets: 4, status: 'draft', tags: [], createdOn: '1 week ago', createdBy: { initials: 'HA', name: 'Harshad' } },
  { id: '7', badge: 'FGD', badgeColor: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)', title: 'Digital Tipping Sentiment', assets: 0, status: 'completed', tags: [], createdOn: '1 week ago', createdBy: { initials: 'HA', name: 'Harshad' } },
  { id: '8', badge: 'FGD', badgeColor: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)', title: 'Digital Tipping Sentiment', assets: 0, status: 'completed', tags: [], createdOn: '1 week ago', createdBy: { initials: 'HA', name: 'Harshad' } },
  { id: '9', badge: 'FGD', badgeColor: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)', title: 'FIFA Campaign Evaluation', assets: 1, status: 'completed', tags: [], createdOn: '1 month ago', createdBy: { initials: 'HA', name: 'Harshad' } },
];

function StatusPill({ status }: { status: ResearchRow['status'] }) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: '#DCFCE7' }}>
        <CircleCheck size={12} color="#16A34A" />
        <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: '#16A34A' }}>Completed</span>
      </span>
    );
  }
  if (status === 'draft') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: '#DBEAFE' }}>
        <FileText size={12} color="#2563EB" />
        <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: '#2563EB' }}>Draft</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: '#FEF3C7' }}>
      <Clock size={12} color="#D97706" />
      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: '#D97706' }}>In Progress</span>
    </span>
  );
}

export function DashboardView({ onNewResearch }: { onNewResearch: () => void }) {
  const [tab, setTab] = useState<StatusFilter>('all');
  const [query, setQuery] = useState('');

  const counts = {
    all: SAMPLE_ROWS.length,
    'in-progress': SAMPLE_ROWS.filter(r => r.status === 'in-progress').length,
    draft: SAMPLE_ROWS.filter(r => r.status === 'draft').length,
    completed: SAMPLE_ROWS.filter(r => r.status === 'completed').length,
  };

  const filtered = SAMPLE_ROWS.filter(r => {
    if (tab !== 'all') {
      const want = tab === 'in-progress' ? 'in-progress' : tab;
      if (r.status !== want) return false;
    }
    if (query && !r.title.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-full">
      {/* Hero */}
      <div
        className="relative w-full px-8 pt-6 pb-12"
        style={{ background: 'linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7E22CE 100%)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3" /><path d="M12 19v3" /><path d="M2 12h3" /><path d="M19 12h3" />
              <path d="m4.93 4.93 2.12 2.12" /><path d="m16.95 16.95 2.12 2.12" />
              <path d="m4.93 19.07 2.12-2.12" /><path d="m16.95 7.05 2.12-2.12" />
            </svg>
            <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 18, color: 'white' }}>Socialtrait</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-all hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
              <Users size={14} color="white" />
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'white' }}>AI Communities</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-all hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
              <ArrowUpRight size={14} color="white" />
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'white' }}>Get Help</span>
            </button>
            <button className="flex items-center justify-center rounded-full transition-all hover:bg-white/10" style={{ width: 34, height: 34, border: '1px solid rgba(255,255,255,0.25)' }}>
              <User size={15} color="white" />
            </button>
          </div>
        </div>

        {/* Greeting */}
        <div className="flex flex-col items-center text-center mt-10">
          <h1 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 36, color: 'white', letterSpacing: '-0.5px' }}>
            Hello there, what's on your mind?
          </h1>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 10, lineHeight: '22px', maxWidth: 620 }}>
            Accelerate confident decisions with AI agents. Get instant feedback, test creatives, and uncover what truly drives your audience
          </p>
          <button
            onClick={onNewResearch}
            className="flex items-center gap-2 rounded-full px-5 py-2.5 mt-7 transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.18)' }}
          >
            <Plus size={16} color="#7C3AED" strokeWidth={2.5} />
            <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 14, color: '#7C3AED' }}>New Research</span>
          </button>
        </div>
      </div>

      {/* Table panel */}
      <div className="px-8 pt-5 pb-10">
        {/* Tabs + search */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div className="flex items-center gap-1 rounded-full p-1" style={{ background: 'rgba(10,10,10,0.04)' }}>
            {([
              { id: 'all', label: 'All', icon: null },
              { id: 'in-progress', label: 'In Progress', icon: Clock },
              { id: 'draft', label: 'Draft', icon: FileText },
              { id: 'completed', label: 'Completed', icon: CircleCheck },
            ] as const).map(t => {
              const active = tab === t.id;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all"
                  style={{ background: active ? 'white' : 'transparent', boxShadow: active ? '0 1px 3px rgba(0,0,0,0.06)' : 'none' }}
                >
                  {Icon && <Icon size={13} color={active ? '#0a0a0a' : 'rgba(10,10,10,0.55)'} />}
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: active ? 600 : 500, color: active ? '#0a0a0a' : 'rgba(10,10,10,0.55)' }}>{t.label}</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.4)' }}>
                    ({counts[t.id]})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full px-3 py-2" style={{ background: 'white', border: '1px solid rgba(10,10,10,0.1)', minWidth: 280 }}>
              <Search size={14} color="rgba(10,10,10,0.4)" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search here..."
                className="flex-1 bg-transparent outline-none"
                style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a' }}
              />
            </div>
            <button className="flex items-center gap-1.5 rounded-full px-3.5 py-2 transition-all hover:bg-[rgba(10,10,10,0.04)]" style={{ border: '1px solid rgba(10,10,10,0.1)', background: 'white' }}>
              <ListFilter size={14} color="rgba(10,10,10,0.6)" />
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(10,10,10,0.7)' }}>Filter</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(10,10,10,0.08)' }}>
          {/* Header */}
          <div className="grid items-center px-4 py-3" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 40px', background: 'white', borderBottom: '1px solid rgba(10,10,10,0.06)' }}>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(10,10,10,0.5)' }}>Research ({filtered.length}/{SAMPLE_ROWS.length})</span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(10,10,10,0.5)' }}>Assets</span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(10,10,10,0.5)' }}>Status</span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(10,10,10,0.5)' }}>Tags</span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(10,10,10,0.5)' }}>Created on</span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(10,10,10,0.5)' }}>Created by</span>
            <span />
          </div>

          {/* Rows */}
          {filtered.map(row => (
            <div key={row.id} className="grid items-center px-4 py-3 transition-colors hover:bg-[rgba(10,10,10,0.02)]" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 40px', borderBottom: '1px solid rgba(10,10,10,0.05)' }}>
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative flex items-center justify-center rounded-lg shrink-0" style={{ width: 32, height: 32, background: row.badgeColor }}>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: 'white' }}>{row.badge}</span>
                  {row.hasIndicator && <span className="absolute" style={{ top: -2, right: -2, width: 8, height: 8, borderRadius: 999, background: '#22C55E', border: '1.5px solid white' }} />}
                </div>
                <span className="truncate" style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, color: '#0a0a0a' }}>{row.title}</span>
              </div>
              <div className="flex items-center">
                {row.assets === 0 ? (
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(10,10,10,0.35)' }}>Nil</span>
                ) : (
                  <div className="flex items-center -space-x-1.5">
                    {Array.from({ length: Math.min(row.assets, 2) }).map((_, i) => (
                      <div key={i} className="rounded-md" style={{ width: 22, height: 22, background: `linear-gradient(135deg, hsl(${(i + row.id.length) * 50},70%,70%) 0%, hsl(${(i + row.id.length) * 50 + 30},70%,55%) 100%)`, border: '1.5px solid white' }} />
                    ))}
                    {row.assets > 2 && (
                      <span className="flex items-center justify-center rounded-md" style={{ width: 22, height: 22, background: 'rgba(10,10,10,0.06)', fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: 'rgba(10,10,10,0.6)' }}>+{row.assets - 2}</span>
                    )}
                  </div>
                )}
              </div>
              <div>
                <StatusPill status={row.status} />
              </div>
              <div>
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(10,10,10,0.35)' }}>No tags</span>
              </div>
              <div>
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(10,10,10,0.7)' }}>{row.createdOn}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full" style={{ width: 24, height: 24, background: 'rgba(10,10,10,0.06)' }}>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: 'rgba(10,10,10,0.6)' }}>{row.createdBy.initials}</span>
                </div>
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(10,10,10,0.7)' }}>{row.createdBy.name}</span>
              </div>
              <button className="flex items-center justify-center rounded-md transition-colors hover:bg-[rgba(10,10,10,0.06)]" style={{ width: 28, height: 28 }}>
                <MoreHorizontal size={15} color="rgba(10,10,10,0.5)" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
