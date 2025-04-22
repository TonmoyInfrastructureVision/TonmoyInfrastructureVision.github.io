"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

// Catppuccin theme variants
export type CatppuccinFlavor = "latte" | "frappe" | "macchiato" | "mocha";

interface CatThemeProviderProps extends ThemeProviderProps {
  defaultFlavor?: CatppuccinFlavor;
}

export function CatThemeProvider({
  children,
  defaultFlavor = "mocha",
  ...props
}: CatThemeProviderProps) {
  // Default to dark mode if mocha/macchiato, light mode if latte/frappe
  const isDark = defaultFlavor === "mocha" || defaultFlavor === "macchiato";
  const defaultTheme = isDark ? "dark" : "light";

  // Apply the Catppuccin flavor as a data attribute
  React.useEffect(() => {
    document.documentElement.setAttribute("data-catppuccin-flavor", defaultFlavor);
  }, [defaultFlavor]);

  return (
    <NextThemesProvider defaultTheme={defaultTheme} {...props}>
      {children}
    </NextThemesProvider>
  );
} 