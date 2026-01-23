export const Theme = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export const THEME_STORAGE_KEY = "theme";
export const THEME_ATTRIBUTE = "data-theme";
