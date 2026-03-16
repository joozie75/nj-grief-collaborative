'use client';

import { useTheme } from './ThemeProvider';

const themes = [
  {
    id: 'warm' as const,
    label: 'Version 1',
    description: 'Warm & Organic',
    bg: '#fffcf9',
    colors: ['#609191', '#803d8e', '#95ca56'],
  },
  {
    id: 'modern' as const,
    label: 'Version 2',
    description: 'Clean & Minimal',
    bg: '#ffffff',
    colors: ['#111827', '#4f46e5', '#e5e7eb'],
  },
  {
    id: 'bold' as const,
    label: 'Version 3',
    description: 'Dark & Vibrant',
    bg: '#0a0a14',
    colors: ['#a78bfa', '#f472b6', '#34d399'],
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div style={{ background: theme === 'bold' ? '#13132a' : '#fff', borderColor: theme === 'bold' ? '#252545' : '#e5e7eb' }} className="rounded-2xl shadow-2xl border p-3 flex flex-col gap-1.5 min-w-[180px]">
        <p style={{ color: theme === 'bold' ? '#9898b0' : '#9ca3af' }} className="text-[10px] uppercase tracking-[0.15em] font-bold px-1 mb-1">
          Switch Design
        </p>
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            style={{
              background: theme === t.id ? (theme === 'bold' ? '#252545' : '#f3f4f6') : 'transparent',
              color: theme === 'bold' ? '#eeeef5' : '#111827',
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all hover:opacity-80"
            aria-label={`Switch to ${t.label}`}
          >
            <div
              className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
              style={{ background: t.bg, border: `1px solid ${t.colors[0]}30` }}
            >
              <div className="flex gap-0.5">
                {t.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-6 rounded-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm font-bold block leading-tight">{t.label}</span>
              <span style={{ color: theme === 'bold' ? '#6b6b85' : '#6b7280' }} className="text-[10px] leading-tight">{t.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
