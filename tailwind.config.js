import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
        fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        // Or if you want to keep it as a separate family:
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
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

      colors: {
        primary: "#FFFFFF",
        navColor : "#E9F6FF", 
        btnColor : "#007DD0",
        footerColor: "#00548C"
      },
      fontSize: {
        normal: "1.125rem"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config