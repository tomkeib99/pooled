import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f1115",
        surface: "#131722",
        "surface-2": "#171c28",
        text: "#e6e9ef",
        "text-dim": "#aab2c5",
        primary: "#0f8b3d",
        "primary-2": "#0b6e31",
        accent: "#3ecf8e",
        border: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.35)",
        primary: "0 8px 20px rgba(15,139,61,.28)",
        "primary-hover": "0 14px 28px rgba(15,139,61,.4)",
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "22px",
      },
    },
  },
  plugins: [],
} satisfies Config
