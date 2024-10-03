import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      showMenuBurguer: {
        from: { opacity: "0", transform: "translatex(80px)" },
        to: { oapcity: "1", transform: "translatex(0)" },
      },
    }
  },
  plugins: [],
};
export default config;
