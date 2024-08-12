"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  BsFillMoonStarsFill,
  BsSunFill,
  BsFillLightningFill,
} from "react-icons/bs";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <BsFillLightningFill />;

  if (resolvedTheme === "dark") {
    return (
      <BsSunFill
        onClick={() => setTheme("light")}
        className={`cursor-pointer ${
          resolvedTheme === "dark" ? "text-white" : "text-black"
        }`}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <BsFillMoonStarsFill
        onClick={() => setTheme("dark")}
        className={`cursor-pointer`}
      />
    );
  }
}
