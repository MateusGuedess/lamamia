"use client";
import { createContext, useState } from "react";

type Children = {
  children: string | JSX.Element | JSX.Element[];
};

interface Theme {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<Theme>({} as Theme);

export const ThemeProvider = ({ children }: Children) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
