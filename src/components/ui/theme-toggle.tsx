"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions so the UI doesn't "jump"
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-full 
                 border border-navy/20 bg-white shadow-sm
                 dark:border-white/20 dark:bg-navy
                 transition-all duration-300 hover:scale-110"
      aria-label="Toggle Theme"
    >
      {/* Sun Icon: Visible in Light Mode, hidden in Dark */}
      <Sun
        className={`h-[18px] w-[18px] text-gold transition-all duration-300 ${
          theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      
      {/* Moon Icon: Hidden in Light Mode, visible in Dark */}
      <Moon
        className={`absolute h-[18px] w-[18px] text-gold transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}