import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#020203",
        "bg-base": "#050506",
        "bg-elevated": "#0a0a0c",
        accent: "#30D158",
        "accent-bright": "#34D862",
        foreground: "#EDEDEF",
        "foreground-muted": "#8A8F98",
      },
      fontFamily: {
        sans: ["Inter", "Geist Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 10s ease-in-out infinite",
        "float-medium": "float 8s ease-in-out infinite",
        "float-fast": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.2" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "card": "0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.2)",
        "card-hover": "0 0 0 1px rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(48,209,88,0.1)",
        "accent-glow": "0 0 0 1px rgba(48,209,88,0.5), 0 4px 12px rgba(48,209,88,0.3), inset 0 1px 0 0 rgba(255,255,255,0.2)",
        "accent-glow-lg": "0 0 0 1px rgba(48,209,88,0.4), 0 8px 32px rgba(48,209,88,0.25), 0 0 80px rgba(48,209,88,0.1), inset 0 1px 0 0 rgba(255,255,255,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
