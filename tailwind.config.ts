const { fontFamily } = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        maxw: "1900px",
      },
    },
    extend: {
      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
        myfont: ["Advent Pro", "sans-serif", fontFamily.sans],
      },
      screens: {
        "2000": "2000px",
        "1800": "1800px",
        "1700": "1700px",
        "1600": "1600px",
        "1500": "1900px",
        "1400": "1400px",
        "1300": "1300px",
        "1200": "1200px",
        "1100": "1100px",
        "1000": "1000px",
        "900": "900px",
        "800": "800px",
        "700": "700px",
        "600": "600px",
        "500": "500px",
        "400": "400px",
        "320": "320px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          // DEFAULT: "hsl(var(--primary))",
          DEFAULT: "#0F5B8E",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      border: {
        myborder: "1px solid #75B8E3",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        maxw: "1700px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
} satisfies Config;

export default config;
