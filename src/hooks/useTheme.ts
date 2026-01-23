"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Theme,
  ThemeType,
  THEME_STORAGE_KEY,
  THEME_ATTRIBUTE,
} from "@/constants/theme";

function getStoredTheme(): ThemeType {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === Theme.DARK || stored === Theme.LIGHT) {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Theme.DARK
    : Theme.LIGHT;
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(Theme.LIGHT);

  useEffect(() => {
    const initialTheme = getStoredTheme();
    setTheme(initialTheme);
    document.documentElement.setAttribute(THEME_ATTRIBUTE, initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const newTheme = current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme };
}
