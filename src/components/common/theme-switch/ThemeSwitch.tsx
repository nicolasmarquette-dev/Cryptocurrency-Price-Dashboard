"use client";

import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/constants/theme";
import { ThemeSwitchLabels } from "./ThemeSwitch.labels";
import { MoonIcon, SunIcon } from "./ThemeSwitch.icons";
import styles from "./ThemeSwitch.module.css";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === Theme.LIGHT;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleTheme}>
        {isLight ? <MoonIcon /> : <SunIcon />}
        {isLight ? ThemeSwitchLabels.dark : ThemeSwitchLabels.light}
      </button>
    </div>
  );
}
