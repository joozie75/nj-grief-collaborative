'use client';

import { useTheme } from './ThemeProvider';

const themes = [
  { id: 'garden' as const, label: 'Garden', colors: ['#609191', '#803d8e', '#95ca56'] },
  { id: 'sunset' as const, label: 'Sunset', colors: ['#e07a5f', '#3d405b', '#f2cc8f'] },
  { id: 'ocean' as const, label: 'Ocean', colors: ['#0077b6', '#023e8a', '#90e0ef'] },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-2 flex gap-1">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              theme === t.id
                ? 'bg-gray-100 shadow-inner'
                : 'hover:bg-gray-50'
            }`}
            aria-label={`Switch to ${t.label} theme`}
            title={t.label}
          >
            <div className="flex -space-x-1">
              {t.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
