import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070B",
        panel: "#0A0D14",
        line: "#202532",
        muted: "#9BA3B4",
        accent: "#7C6CF6",
        electric: "#55B8FF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,108,246,.18), 0 24px 80px rgba(0,0,0,.35)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #9B8CFF 0%, #55B8FF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
