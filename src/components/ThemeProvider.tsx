'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'garden' | 'sunset' | 'ocean';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'garden',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('garden');

  useEffect(() => {
    const saved = localStorage.getItem('njgc-theme') as Theme | null;
    if (saved && ['garden', 'sunset', 'ocean'].includes(saved)) {
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
