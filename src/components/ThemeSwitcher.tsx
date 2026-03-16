'use client';

import { useTheme } from './ThemeProvider';

const themes = [
  {
    id: 'warm' as const,
    label: 'Warm',
    description: 'Organic & colorful',
    preview: 'bg-gradient-to-r from-[#609191] via-[#803d8e] to-[#95ca56]',
  },
  {
    id: 'modern' as const,
    label: 'Modern',
    description: 'Clean & minimal',
    preview: 'bg-gradient-to-r from-[#111827] via-[#4f46e5] to-[#e5e7eb]',
  },
  {
    id: 'bold' as const,
    label: 'Bold',
    description: 'Dark & vibrant',
    preview: 'bg-gradient-to-r from-[#a78bfa] via-[#f472b6] to-[#34d399]',
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-3 flex flex-col gap-2 min-w-[160px]">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold px-1">Theme</p>
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
              theme === t.id
                ? 'bg-gray-100 dark:bg-gray-800 ring-2 ring-gray-300 dark:ring-gray-600'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
            aria-label={`Switch to ${t.label} theme`}
          >
            <div className={`w-8 h-8 rounded-lg ${t.preview} shrink-0`} />
            <div>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100 block">{t.label}</span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">{t.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
