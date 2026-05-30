"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

function getInitialDarkMode() {
  if (typeof window === "undefined") {
    return false;
  }

  const darkMode = localStorage.getItem("darkMode");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return darkMode === "enabled" || (!darkMode && prefersDarkMode);
}

function applyDarkMode(isEnabled: boolean) {
  document.documentElement.classList.toggle("dark", isEnabled);
  localStorage.setItem("darkMode", isEnabled ? "enabled" : "disabled");
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error(
      "OiOi, useDarkMode must be used within a DarkModeProvider."
    );
  }
  return context;
};

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  const enableDarkMode = useCallback(() => {
    applyDarkMode(true);
    setIsDarkMode(true);
  }, []);

  const disableDarkMode = useCallback(() => {
    applyDarkMode(false);
    setIsDarkMode(false);
  }, []);

  useEffect(() => {
    applyDarkMode(isDarkMode);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("darkMode")) {
        applyDarkMode(e.matches);
        setIsDarkMode(e.matches);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, toggleDarkMode, enableDarkMode, disableDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
