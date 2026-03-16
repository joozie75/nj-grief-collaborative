'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'warm' | 'modern' | 'bold';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'warm',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('warm');

  useEffect(() => {
    const saved = localStorage.getItem('njgc-theme') as Theme | null;
    if (saved && ['warm', 'modern', 'bold'].includes(saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('njgc-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
